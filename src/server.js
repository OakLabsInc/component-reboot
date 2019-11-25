
require('dotenv').config()
const debug = process.env.NODE_ENV !== 'production'
const rebootTime = process.env.REBOOT_TIME || '0 * * * * *'
const timezone = process.env.TZ || 'America/Los_Angeles'
const { join } = require('path')

var schedule = require('node-schedule');
var platform = require(join(__dirname, 'platform'))

console.log('platform host : ', process.env.PLATFORM_HOST)
console.log('rebootTime : ', rebootTime)


schedule.scheduleJob(rebootTime, function(fireDate){
  console.log('Time for a reboot!', fireDate);
  platform.reboot(function(err){
    if(err) console.log(err)
  })
});




