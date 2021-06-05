import Discord from 'discord.js';
const getPlayerData = require('../resources/modules/getPlayerData.module.ts');

exports.config = {
    'name': 'profile',
    'description': 'Displays in-game profile information.',
    'usage': 'profile (user)',
    'aliases': ['getprofile', 'whois'],
    'alias_str': 'getprofile, whois',
    'category': 'Miscellaneous'
}

exports.run = async (client: any, message: any, args: any[]) => {
    let id: string;
    if(!args[0]){
        return message.lineReplyNoMention('You need to provide an ID!')
    }else id = args[0];

    let plrData: any = await getPlayerData.via_steam(id);

    if(plrData.error){
        return message.lineReplyNoMention(`An error has occured: ${plrData.error}`)
    }else plrData = plrData.playerData[0]
    
    let wlRatio: number = (plrData.Wins.S / plrData.Losses.N);
    
    let embed: Discord.MessageEmbed = new Discord.MessageEmbed()
    .setTitle('Game Profile')
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
    .addField('Win/Lose Ratio', wlRatio , true)

    message.lineReplyNoMention(embed)
}