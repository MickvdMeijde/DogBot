case 'unmute':
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permissions to execute this command")

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
		if(!toMute) return message.channel.send("You did not specify a user");
			if(toMute.id === message.author.id) return message.channel.send("You can't unmute yourself")
		if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't mute a member that has a higher role or has the same role as you")


		let role = message.guild.roles.find(r => r.name === "Muted");

		if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted");

		await toMute.removeRole(role);
		message.channel.send("Unmuted");

		return;