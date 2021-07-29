import Discord from 'discord.js';
const getPlayerCount = require('../../resources/modules/getPlayerCount.module.ts');

exports.config = {
    'name': 'stats',
    'description': 'Displays game statistics.',
    'usage': 'stats',
    'aliases': ['statistics'],
    'alias_str': 'statistics',
    'category': 'Game'
}

exports.run = async (client: any, interaction: any) => {
    let plrCount = await getPlayerCount();
    const author = require('../../resources/modules/getAuthorFromInteraction.module.ts')(interaction)

    let stats: Discord.MessageEmbed = new Discord.MessageEmbed()
    .setTitle('Online Players')
    .setAuthor(author.tag, author.avatar_url)
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription(`**Total Online Players**: __${plrCount.body}__`)
    .addField('North America', '[ Placeholder ]')
    .addField('Europe', '[ Placeholder ]')

    return client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: {
                embeds: [stats]
            }
        }
    })
}