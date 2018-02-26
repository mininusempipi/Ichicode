/* Returns the created date of a guild/member/role/channel. */

exports.run = async (client, msg, [type, member, ...value]) => {
  value = value.length ? value.join(' ') : null;
  let final;
  switch (type) {
  case 'guild':
    return msg.send(`${msg.guild.name} / ${msg.guild.id} / ${msg.guild.createdAt}`, { code: 'xl' })
      .catch(err => console.log(err, 'error'));
  case 'member':
    if (member) {
      return msg.send(`@${member.user.username} / ${member.id} / ${member.user.createdAt}`, { code: 'xl' })
        .catch(err => console.log(err, 'error'));
    }
    break;
  case 'role':
    if (msg.guild.roles.find('name', value)) {
      final = msg.guild.roles.find('name', value);
      return msg.send(`${final.name} / ${final.id} / ${final.createdAt}`, { code: 'xl' })
        .catch(err => console.log(err, 'error'));
    }
    break;
  case 'channel':
    if (msg.guild.channels.find('name', value)) {
      final = msg.guild.channels.find('name', value);
      return msg.send(`#${final.name} / ${final.id} / ${final.createdAt}`, { code: 'xl' })
        .catch(err => console.log(err, 'error'));
    }
    break;
  default:
    return msg.send(`I cannot find the created date of \`${value}\``)
      .catch(err => console.log(err, 'error'));
  }
};

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: [],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
  cooldown: 2500,
  nsfw: false,
};

exports.help = {
  name: 'age',
  description: 'Returns the created date of a guild/member/role/channel.',
  usage: '<guild|member|role|channel> [member:member] [value:str]',
  usageDelim: ' ',
  extendedHelp: '',
};