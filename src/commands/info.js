//information
case 'info':
	const githubEmote= client.emojis.get(414049712057090059);
	let embed = new Discord.RichEmbed()
		.setAuthor(`${client.user.username}`, "https://cdn.discordapp.com/avatars/385108268177162240/d892ad2abd2ede2621a4d54e25f5ee22.webp?size=256)")
		.addField("Version", `${package.version}`, true)
		.addField("Creator", `${package.author}`, true)
		.addField("running on", `${client.guilds.size} servers`, true)
		.addField("contribute", `https://github.com/MickvdMeijde/DogBot`, true)
	message.channel.send(embed);

	return;