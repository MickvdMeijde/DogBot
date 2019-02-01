//help dog
case 'help' + ' ' + 'dog':
	let embed = new Discord.RichEmbed()
		.addField("Dog Commands:", "db!sit - I can sit on command :3 \ndb!pet - I like getting pet :D \ndb!fetch - I can fetch like no other :3 \ndb!rollover - weeeee :D")
	message.channel.send(embed);

	return;