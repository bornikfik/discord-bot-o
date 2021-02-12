module.exports = {
    name: "rekni",
    execute(message, args, Discord, client) {
        const input = args.join(' ')
        message.channel.send(input)
    }
}