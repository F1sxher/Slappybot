import Discord from 'discord.js';
import { MessageButton } from 'discord-buttons';
// const topPlayers-Teams = require('../resources/modules/getTopData.module.ts');

exports.config = {
    'name': 'leaderboard',
    'description': 'Displays top Players and top Teams.',
    'usage': 'leaderboard',
    'aliases': ['topplayers', 'topteams'],
    'alias_str': 'topplayers, topteams',
    'category': 'Game'
}

exports.run = async (client: any, message: any) => {
    let embedPlr: Discord.MessageEmbed = new Discord.MessageEmbed()
    .setTitle('Player Leaderboards')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription('hello world')
    .setThumbnail(client.user.displayAvatarURL())

    let embedTeam: Discord.MessageEmbed = new Discord.MessageEmbed()
    .setTitle('Team Leaderboards')
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(client.user.username)
    .setTimestamp(new Date())
    .setColor('67c6fa')
    .setDescription('test')
    .setThumbnail(client.user.displayAvatarURL())

    let buttonPlr: MessageButton = new MessageButton()
    .setStyle('blurple')
    .setLabel('Show Top Players')
    .setID('topPlr')

    let buttonTeam: MessageButton = new MessageButton()
    .setStyle('blurple')
    .setLabel('Show Top Teams')
    .setID('topTeam')

    let buttonLnk: MessageButton = new MessageButton()
    .setStyle('url')
    .setLabel('View Online Leaderboards')
    .setURL('https://www.slappyball.com/team-rankings/')

    let editId: string;
    let m = await message.channel.send({buttons: [buttonPlr, buttonTeam, buttonLnk], embed: embedPlr}).then((msg: Discord.Message) => {
        editId = msg.id;
    })

    let Collector = m.createButtonCollector((Click: any) => Click.clicker.user.id == message.author.id);

    Collector.on ('collect', async (button: any) => {
       if(button.id == 'topPlr'){ 
            let msg: any = await message.channel.messages.fetch(editId)
            msg.edit({buttons: [buttonPlr, buttonTeam, buttonLnk], embed: embedPlr})
            button.defer()
       }else if(button.id == 'topTeam'){
            let msg: any = await message.channel.messages.fetch(editId)
            msg.edit({buttons: [buttonPlr, buttonTeam, buttonLnk], embed: embedTeam})
            button.defer()
       }
    });
}