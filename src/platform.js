const OakPlatform = require('@oaklabs/platform')

async function reboot (cb = function () {}) {
  let platform = await new OakPlatform({
    host: process.env.PLATFORM_HOST || 'localhost:443'
  })
  let host = await platform.host()

  host.reboot(undefined, cb)
}

module.exports.reboot = reboot

