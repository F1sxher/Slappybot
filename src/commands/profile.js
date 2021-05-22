const Discord = require('discord.js');
let fetch = require('node-fetch')

exports.config = {
    'name': 'profile',
    'description': 'Displays in-game profile information.',
    'usage': 'profile (user)',
    'aliases': ['getprofile', 'whois'],
    'alias_str': 'getprofile, whois',
    'category': 'Miscellaneous'
}

exports.run = async (client, message, args) => {
    let headers = {
        "x-api-key": process.env.API_KEY,
        "PlayerId": [args[0]]
    }
    fetch(process.env.API_URI, { method: 'GET', headers: headers})
    .then((res) => {
       return res.json()
    })
    .then((json) => {
    let plrData = json;

    if(plrData.error){
        return message.lineReplyNoMention(`An error has occured: ${plrData.error}`)
    }
    plrData = plrData.playerData[0]; 
    let wlRatio = (plrData.Wins.S / plrData.Losses.N);
    
    let embed = new Discord.MessageEmbed()
    .setTitle('Bot Information')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription(`Showing Player Data for Steam ID: ${plrData.Id.S}\n**This command is a work in progress, expect changes**`)
    .addField('Current Team', plrData.CurrentTeam.S)
    .addField('Level', plrData.PlayerLevel.S, true)
    .addField('Points', plrData.Points.S, true)
    .addField('Lifetime Coins', plrData.LifetimeCoins.S)
    .addField('Wins', plrData.Wins.N, true)
    .addField('Losses', plrData.Losses.N, true)
    .addField('Win/Lose Ratio',wlRatio , true)

    message.lineReplyNoMention(embed)
    });
}