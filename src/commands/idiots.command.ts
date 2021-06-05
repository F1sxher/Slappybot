import Discord from 'discord.js';

exports.config = {
    'name': 'idiots',
    'description': 'my dumbass homies, what else?',
    'usage': 'idiots',
    'aliases': [],
    'alias_str': '',
    'category': 'yes'
}

exports.run = async (client: any, message: any) => {
    let yes: Discord.MessageEmbed = new Discord.MessageEmbed()
    .setDescription('**__Idiots i hate__**:\n \n1) <@176568170176446464> (Elivat3) - Reason: keeps spiking and bullying me\n2) <@192045312565575680> & <@262988551048658945> - Reason: Friends of Elivat3\n3) <@181117203368640512> - Reason: Ayo dont be looking at me, i was told to add them\n \n ||FOR LEGAL REASONS, THIS IS A JOKE!!||')
    message.lineReplyNoMention(yes)
}