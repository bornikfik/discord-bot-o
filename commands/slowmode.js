module.exports = {
  name: "slowmode",
  execute(message, args, client, Discord) {
    if(message.member.HasPermission('EDIT_CHANNELS')){
      if(args[0] != null || args[0] <= 21600){
        message.channel.setRateLimitPerUser(args[0], "admin nastavil slowmode")
      }
    } else {
      message.channel.send("\`nemáš právo na tento příkaz\`");
    }
  }
}