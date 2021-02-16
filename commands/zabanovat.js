module.exports = {
    name: 'ban',
    description: "Bans people from the server",
    execute(message, args){
        if(message.member.hasPermission("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            const reason = args.join(' ') || "Nenapsal jsi důvod banu"
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban({
                reason: reason
            });
            message.channel.send(`<@${memberTarget.user.id}> byl zabanován`);
            console.log('done: Uživatel byl zabanován');
        }else{
            message.channel.send('`err:` Nemůžeš zabanovat tohoto uživatele');
            console.log('Error: nelze zabanovat uživatele');
    }
        } else {
            message.channel.send("Nemáš právo na tento příkaz");
            console.log("Nemá permisse");
        }
        
        }
}