const Discord = require('discord.js');

exports.config = {
    'name': 'info',
    'description': 'Displays bot information.',
    'usage': 'info',
    'aliases': ['information'],
    'alias_str': 'information',
    'category': 'Miscellaneous'
}

exports.run = async (client, message) => {
    const uptime = require('../resources/modules/uptime.module.ts')(client)
    let embed = new Discord.MessageEmbed()
    .setTitle('Bot Information')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription(`Running Version: **${require('../../package.json').version}**`)
    .setThumbnail(client.user.displayAvatarURL())
    .addField('Uptime', uptime, true)
    .addField('Servers', `Running in ${client.guilds.cache.size} guilds.`, true)
    .addField('Useful Links', `**[Website](https://slappyball.com) | [Invite]() | [Slappyball Discord](https://discord.gg/mzrCpw7ttZ) | [Github](https://github.com/F1sxher/Slappybot)**`)
    message.lineReplyNoMention(embed)
}