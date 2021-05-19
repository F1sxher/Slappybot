module.exports = function(client, interaction){
    let args;
    if(interaction.data.options){
      args = interaction.data.options
    }
    const commandName = interaction.data.name
    let command = client.s_commandlist.find((cmd) => cmd.name === commandName);
    if(!command){
      command = client.s_commandlist.find((cmd) => cmd.file.config.aliases.includes(commandName));
      if(!command) return;
    }
    command.file.run(client, interaction, args);
}