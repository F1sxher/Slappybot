const Discord = require('discord.js');

exports.config = {
    'name': 'help',
    'description': 'Displays a help menu.',
    'usage': 'help (optional command)',
    'aliases': ['commands', 'cmds'],
    'aliases_s': 'commands, cmds',
    'category': 'Miscellaneous'
}

exports.run = async (client, message, args) => {
    let useembed2 = false
    const main_embed = new Discord.MessageEmbed()
    .setTitle('Help Menu')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription(`**Welcome, ${message.author.username}!** \n \n Thank you for choosing MC Connect | [Invite](${defaults.invite[require('../package.json').release]})\n \n:link: **Look at** [our website](https://mc-connect.ml)\n:question: **Need support? Join** [our support server](https://discord.gg/mzrCpw7ttZ)`)
    .addField('Miscellaneous', `\`${settings.prefix}help\` → Displays a help menu.\n\`${settings.prefix}info\` → Displays bot information.\n\`${settings.prefix}invite\` → Invites the bot.`)
    .addField('Verification', `\`${settings.prefix}verify\` → Verify your Minecraft Account.\n\`${settings.prefix}getrole\` → Get your role.`)
    .addField('Moderation', `\`${settings.prefix}settings\` → Verify your Minecraft Account.`)
}