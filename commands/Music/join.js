const { Command } = require('klasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'join',
      enabled: true,
      runIn: ['text'],
      cooldown: 2,
      bucket: 1,
      aliases: ['summon'],
      permLevel: 0,
      botPerms: [],
      requiredConfigs: [],
      description: 'Joins the user\'s current voice channel.',
      quotedStringSupport: false,
      usage: '',
      usageDelim: '',
      extendedHelp: 'No extended help available.',
    });
  }

  async run(msg) {
    try {
      const { voiceChannel } = msg.member;
      if (!voiceChannel) return msg.send('You are not conected in a voice channel!');
      await voiceChannel.join();

      const handler = msg.client.queue.get(msg.guild.id);
      if (!handler || !handler.playing) {
        setTimeout(() => {
          if (!handler || !handler.playing) return msg.member.voiceChannel.leave();
        }, 1000 * 60 * 30);
      }

      return msg.send(`Connected to the voice channel \`${voiceChannel}\`.`).then((m) => { m.delete(5000); msg.delete(); });
    } catch (err) { console.log(err); }
  }
};