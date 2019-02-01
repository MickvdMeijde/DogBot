case 'del':
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permissions to execute this command")
	if (args.some(isNaN)) return message.channel.send("The input is Not a Number");
	if (args[0] < 1 || args[0] > 99) return message.channel.send ("an amount between 1 and 99 is required")
	if (args.length === 0) return message.channel.send("You did not specify an amount");
		message.channel.fetchMessages({limit: parseInt(args[0].trim()) + 1}).then(messages => message.channel.bulkDelete(messages));
		console.log("deleted", args, "messages")
	return;