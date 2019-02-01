//boop
case 'boop':
	let toBoop = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!toBoop) return message.channel.send("You did not say who you want to boop ^-^");
	if(toBoop.id === message.author.id) return message.channel.send("So selfish of you not to share your boops")
	if(toBoop.id === client.id) return message.channel.send("AAHH my nows :O")
	if(toBoop.id === message.mentions.users.first()) return message.channel.send("*boops*", message.mentions.users.first())