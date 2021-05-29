const express = require('express');
const app = express();
let config = require('./config.bot.ts')
require('dotenv').config();

/* OLD ==> let url; url = process.env.DB_URL; url = url.split('{USER}'); url = `${url[0]}${process.env.DB_USER}${url[1]}`; url = url.split('{PASS}'); url = `${url[0]}${process.env.DB_PASSWD}${url[1]}`

let dynamo = require('dynamodb');
dynamo.AWS.config.update({accessKeyId: process.env.DB_USER, secretAccessKey: process.env.DB_PASSWD, region: process.env.DB_REGION});*/

app.get('/', (request: any, response: any) => {
     response.sendStatus(200);
});

let listener = app.listen(process.env.PORT, () => {
     console.log('Your app is currently listening on port: ' + listener.address().port);
});

const Discord = require('discord.js');
require('discord-reply')
const client = new Discord.Client();
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
let commandlist: any[] = [];
let s_commandlist: any[] = [];

fs.readdir('./src/commands/', async (err: any, files: any) => {
    if(err){
        return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
    }
    files.forEach(async (file: any) => {
        if(!file.endsWith('.js' && '.ts')) return;
        let commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});

fs.readdir('./src/commands/slash/', async (err: any, files: any) => {
    if(err){
        return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
    }
    files.forEach(async (file: any) => {
        if(!file.endsWith('.js' && '.ts')) return;
        let commandFile = require(`./commands/slash/${file}`);
        s_commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});

client.commandlist = commandlist;
client.s_commandlist = s_commandlist;

client.on('ready', async () => {
  console.log(chalk.white(figlet.textSync('Slappybot', { horizontalLayout: 'full' })));
  console.log(chalk.white(`Bot started! | Guilds: ${client.guilds.cache.size} | Users: ${client.users.cache.size}\n------------------------------------------------------------------------`));
  client.user.setActivity(`/stats • Slappybot`, { type: 'WATCHING'})
  client.botowner = '756614666066591836'
});

client.on('message', async (message: any) => {
    require('./resources/events/message.js')(client, message)
})

client.ws.on('INTERACTION_CREATE', async (interaction: any) => {
    require('./resources/events/interaction.js')(client, interaction)
})

client.login(`${process.env.BOT_TOKEN}`);