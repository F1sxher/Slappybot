import Discord from 'discord.js';
const getPlayerData = require('../../resources/modules/getPlayerData.module.ts');

exports.config = {
    'name': 'getprofile',
    'description': 'Displays in-game profile information',
    'usage': 'profile (user)',
    'aliases': ['getprofile', 'whois'],
    'alias_str': 'getprofile, whois',
    'category': 'Game'
}

exports.run = async (client: any, interaction: any, args: any) => {
    args = args[0]
    if(args.name == 'me'){
        return client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    content: '<:Slappyball:845871654450233364> :x: Command currently unavailable, coming soon :)',
                    flags: 64
                }
            }
        })
    }else if(args.name == 'via'){
        if(args.options[0].name == 'steam'){
            let id: string = args.options[0].options[0].value;
            let plrData: any;

            plrData = await getPlayerData.via_steam(id);



            if(plrData.error){
                return client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            content: 'An error has occured while trying to get the profile, most likely because there is no data for this user.',
                            flags: 64
                        }
                    }
                })
            }else{
                plrData = plrData.playerData[0];
                let wlRatio: any = (plrData.Wins.S / plrData.Losses.N);
                const author: any = require('../../resources/modules/getAuthorFromInteraction.js')(interaction)

                let embed: Discord.MessageEmbed = new Discord.MessageEmbed()
                .setTitle('Game Profile')
                .setAuthor(author.tag, author.avatar_url)
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
            

                return client.api.interactions(interaction.id, interaction.token).callback.post({
                    data: {
                        type: 4,
                        data: {
                            embeds: [embed]
                        }
                    }
                })
            }
        }
    }
}