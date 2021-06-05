import Discord from 'discord.js';

exports.config = {
    'name': 'stream',
    'description': 'Set Stream Status',
    'usage': 'stream (user)',
    'aliases': [],
    'alias_str': '',
    'category': 'Developer'
}

exports.run = async (client: any, message: any, args: any[]) => {
    if(message.author.id != client.botowner){
        return
    }
    if(!args[0] || args[0] == 'off'){
        client.user.setActivity(`/stats • Slappybot`, { type: 'WATCHING'})
    }else{
        if(!args[1]){
            client.user.setActivity('LIVE GAME 🔴', { type: 'STREAMING', url: args[0]})
        }else{
	    let url: string = args[0];
            args.shift()
            let text: string = args.join(' ')
            console.log(text)
            client.user.setActivity(`${text} 🔴`, { type: 'STREAMING', url: url})
        }
    }
}