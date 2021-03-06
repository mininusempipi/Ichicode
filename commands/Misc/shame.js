const { Command } = require('klasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'shame',
      enabled: true,
      runIn: ['text', 'dm', 'group'],
      cooldown: 2,
      bucket: 1,
      aliases: [],
      permLevel: 5,
      botPerms: [],
      requiredConfigs: [],
      description: 'Shames a user.',
      quotedStringSupport: true,
      usage: '<member:member>',
      usageDelim: '',
      extendedHelp: 'No extended help available.',
    });
  }

  async run(msg, [member]) { msg.send(`🔔 SHAME 🔔 ${member} 🔔 SHAME 🔔  https://i.imgur.com/olB0hX5.gif`).then(() => msg.delete()); }
};