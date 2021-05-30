require('dotenv').config();
module.exports = function(client: any, message: any, env: any){
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(env.PREFIX)) return;
    let args: string[] = message.content.slice(env.PREFIX.length).split(' ');
    const commandName: string = args[0].toLowerCase();
    args.shift();
    let command: any = client.commandlist.find((cmd: any) => cmd.name === commandName);
    if(!command){
      command = client.commandlist.find((cmd: any) => cmd.file.config.aliases.includes(commandName));
      if(!command) return;
    }
    command.file.run(client, message, args);
}