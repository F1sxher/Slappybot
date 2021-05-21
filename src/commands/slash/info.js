const Discord = require('discord.js');

exports.config = {
    'name': 'info',
    'description': 'Displays bot information.',
    'usage': 'info',
    'aliases': ['information', 'stats'],
    'alias_str': 'information, stats',
    'category': 'Miscellaneous'
}

exports.run = async (client, interaction) => {
    const uptime = require('../../resources/modules/uptime.js')(client)
    const author = require('../../resources/modules/getAuthorFromInteraction.js')(interaction)
    let embed = new Discord.MessageEmbed()
    .setTitle('Bot Information')
    .setAuthor(author.tag, author.avatar_url)
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription(`Running Version: **${require('../../../package.json').version}**`)
    .setThumbnail(client.user.displayAvatarURL())
    .addField('Uptime', uptime, true)
    .addField('Servers', `Running in ${client.guilds.cache.size} guilds.`, true)
    .addField('Useful Links', `**[Website](https://slappyball.com) | [Invite]() | [Slappyball Discord](https://discord.gg/mzrCpw7ttZ) | [Github](https://github.com/F1sxher/Slappybot)**`)
    return client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: {
                embeds: [embed]
            }
        }
    })
}