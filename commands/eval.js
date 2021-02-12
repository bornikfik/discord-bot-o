const beautify = require('beautify')
module.exports = {
    name: 'eval',
    execute(message, args, Discord, client) {
        if (message.author.id === '764951635704545281' || message.author.id === '785536630035316816' || message.author.id === '661757803010064385') {
            try {
                const msg = message
                const toEval = args.join(' ');
                const evaled = eval(toEval)
                const embed = new Discord.MessageEmbed()
                    .setColor('#00FF00')
                    .setTimestamp()
                    .setFooter(`${client.user.tag}`)
                    .setTitle('Eval')
                    .addField("📤Příkaz", `\`\`\`js\n${beautify(args.join(' '), { format: "js" })}\n\`\`\``)
                    .addField("📥Výsledek", `\`\`\`js\n${evaled}\`\`\``)
                    .addField("Typ:", `\`\`\`${typeof(evaled)}\`\`\``)

                message.channel.send(embed)
            } catch (e) {
                const embedr = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTimestamp()
                    .setTitle('❌ Error!')
                    .setDescription(e)
                    .setFooter(`${client.user.tag}`)

                message.channel.send(embedr)
            }
        }
    }
}