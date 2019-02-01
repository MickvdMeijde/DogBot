//help moderation
case 'help' + ' ' + 'mod':
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permissions to execute this command")
	let embed = new Discord.RichEmbed()
		.addField("Moderation Commands:", "db!mute [mention] - Mutes the selected user. \ndb!unmute [mention] - Unmutes the selected user. \ndb!del <number of messages> - Deletes the specified amount of messages.")
	message.channel.send(embed);

	return;