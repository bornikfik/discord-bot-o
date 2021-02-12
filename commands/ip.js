const { execute } = require("./eval");

module.exports = {
    name: "ip",
    execute(message, args, Discord, client) {
        const embed = new Discord.MessageEmbed()
        .setColor('#ED4050')
        .setTitle('82.208.17.35:27587')
        message.channel.send(embed)
    }
}