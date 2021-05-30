require('dotenv').config();
module.exports = function(client: any, interaction: any, env: any){
    let args: any;
    if(interaction.data.options){
      args = interaction.data.options
    }
    const commandName: string = interaction.data.name
    let command: any = client.s_commandlist.find((cmd: any) => cmd.name === commandName);
    if(!command){
      command = client.s_commandlist.find((cmd: any) => cmd.file.config.aliases.includes(commandName));
      if(!command) return;
    }
    command.file.run(client, interaction, args);
}