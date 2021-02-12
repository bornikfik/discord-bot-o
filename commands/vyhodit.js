module.exports = {
    name: 'kick',
    description: "Kicks people from the server",
    execute(message, args){
        if(message.member.hasPermission("KICK_MEMBERS")){
            const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            if(memberTarget.roles.cache.has('744475588412047430')){}
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> byl vyhozenej`);
            console.log('sent: User has been kicked!');
        }else{
            message.channel.send('`Error:` Nemůžeš vyhodit tohoto uživatele');
            console.log('Error: nelze vyhodit uživatele');
    }
        } else {
            message.channel.send("\`nemáš právo na tento příkaz\`");
            console.log("Player not admin");
        }
    }
        
}