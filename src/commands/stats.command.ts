import Discord from 'discord.js';
const getPlayerCount = require('../resources/modules/getPlayerCount.module.ts');

exports.config = {
    'name': 'stats',
    'description': 'Displays game statistics.',
    'usage': 'stats',
    'aliases': ['statistics'],
    'alias_str': 'statistics',
    'category': 'Game'
}

exports.run = async (client: any, message: any) => {
    let plrCount = await getPlayerCount();

    let stats = new Discord.MessageEmbed()
    .setTitle('Online Players')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription(`**Total Online Players**: __${plrCount.body}__`)
    .addField('North America', '[ Placeholder ]')
    .addField('Europe', '[ Placeholder ]')

    return message.lineReplyNoMention(stats)
}