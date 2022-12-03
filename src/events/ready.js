const ms = require('ms')
const { ActivityType } = require('discord.js')
module.exports = {
  name: "ready",
  execute(client) {
    console.log('I have reconnected to the server. Awaiting orders.')

    let activities = [`Rocky suffer`, `the code fail`, `my code`, `the server`, `the tv`, `youtube`], i = 6;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: ActivityType.Watching }), 30000)

    client.on('debug', async (e) => console.log(e))
    client.on('error', async (f) => console.log(f))
  }
}