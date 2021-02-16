const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "prikazy",
  execute(message, args, client, Discord, prefix) {
    const embed = new MessageEmbed()
    .setColor('#ED4050')
    .setTitle('Příkazy')
    .setTimestamp()
    .setDescription(`prefix: ?`)
    .addField('prikazy, ip, rekni, ', ' vyhodit, zabanovat, slowmode, vymazat')
    message.channel.send(embed)
  }
}