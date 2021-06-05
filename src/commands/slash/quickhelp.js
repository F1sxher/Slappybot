const Discord = require('discord.js')

exports.config = {
    'name': 'profile',
    'description': 'Displays in-game profile information.',
    'usage': 'profile (user)',
    'aliases': ['getprofile', 'whois'],
    'alias_str': 'getprofile, whois',
    'category': 'Miscellaneous'
}

exports.run = async (client, interaction, args) => {
    let responses = {
        "only_matching_with_bots": "**__Why am I only matching with bots?__**\n \nIt may be because of:\n> After 1 minute of trying to connect, there have been no other players to match with (in your region)\n**OR**\n> You have no internet connection / a ping higher than 150",
        "i_have_premium": "If you have premium and want to get a cool role, contact a moderator to get it by showing proof of owning Slappyball Premium!",
        "how_do_i_join_tournaments": "Tournaments are coming soon, as the game has many more features to come, tournaments are not a priority, but they are in the works :)"
    }
    let response = responses[args[0].value]
    let responseEmbed = new Discord.MessageEmbed()
    .setTitle('Quick Response System')
    .setDescription(response)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setFooter('Slappybot')

    return client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: {
                embeds: [responseEmbed],
                flags: 64
            }
        }
    })
}