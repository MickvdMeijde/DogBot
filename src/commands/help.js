//help command
case 'help':
	let embed = new Discord.RichEmbed()
		.addField("Prefix:", "My prefix is db!")
		.addField("General Commands:", "db!help - The help page you are currently on \ndb!info - Info about me \nmore WIP")
		.addField("Moderation", "db!help mod")
		.addField("db!dog", "watch me do tricks ^w^",)
	message.channel.send(embed);

	return;
