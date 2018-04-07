const { Command } = require('klasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'request',
      enabled: true,
      runIn: ['text'],
      cooldown: 60,
      bucket: 1,
      aliases: [],
      permLevel: 0,
      botPerms: [],
      requiredConfigs: [],
      description: 'Sends an anonymous message to the mods.',
      quotedStringSupport: true,
      usage: '<message:str>',
      usageDelim: '',
      extendedHelp: 'No extended help available.',
    });
  }

  async run(msg, [...message]) {
    try {
      const chan = msg.guild.configs.requestChannel;
      if (!chan) return;
      const embed = new msg.client.methods.Embed()
        .setColor('#00ff94')
        .addField('Request', message.length > 0 ? message : message.join(' '))
        .setTimestamp();
      return msg.guild.channels.find('id', chan).sendEmbed(embed)
        .then(msg.delete())
        .catch(err => msg.client.emit('log', err, 'error'));
    } catch (err) { console.log(err); }
  }
};