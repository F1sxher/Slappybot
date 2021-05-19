module.exports = function(client, message){
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(process.env.PREFIX)) return;
    let args = message.content.slice(process.env.PREFIX.length).split(' ');
    const commandName = args[0].toLowerCase();
    args.shift();
    let command = client.commandlist.find((cmd) => cmd.name === commandName);
    if(!command){
      command = client.commandlist.find((cmd) => cmd.file.config.aliases.includes(commandName));
      if(!command) return;
    }
    command.file.run(client, message, args);
}