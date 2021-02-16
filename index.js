const Discord = require('discord.js')
const Database = require("@replit/database")
const db = new Database()
const fs = require('fs')
const keepalive = require('./keepalive.js')
const { token, prefix } = require('./config')
const chalk = require('chalk')
const client = new Discord.Client
client.commands = new Discord.Collection
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
client.once('ready', () => {
  console.log(chalk.red('---------------------------'))
  console.log(chalk.blue(`logged in as ${client.user.tag}`))
  client.user.setActivity("82.208.17.35:27587", {type: 'WATCHING'})
  client.user.setStatus('idle');
  console.log(chalk.red('---------------------------'))
})
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()

    if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName)
  try {
    command.execute(message, args, Discord, client, prefix)
  } catch (error) {
    console.error(error)
    message.reply(`\`\`\`nastal problém při spouštění tohoto příkazu ${error}\`\`\``)
  }
})
client.on('error', error => {
  console.log(error)
})
client.on('disconnect', () => {
  console.log('weboscket disconnected :(')
})
client.login(token)
//--------------------------------------------//