const settings = require ("../config.json");
const package = require ("../package.json")
const Discord = require("discord.js");
const prefix = settings.prefix;

const client = new Discord.Client({disableEveryone: true});

client.on("ready", async () => {
	console.log(`bot is ready! ${client.user.username}`);
	client.user.setGame("For help | db!help");
	try {
		let link = await client.generateInvite(["SEND_MESSAGES", "VIEW_CHANNEL", "VIEW_AUDIT_LOG", "ADD_REACTIONS", "MANAGE_CHANNELS", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]);
		console.log('---------------------------------------------------------------------------------------------------');
		console.log(link);
		console.log('---------------------------------------------------------------------------------------------------');
	} catch(e) {
		console.log(e.stack);
	}
});

client.on("message", async message =>{
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	if (command === `${prefix}`+addition);

	switch(addition) {

		//help command
		case 'help':
			let embed = new Discord.RichEmbed()
				.addField("Prefix:", "My prefix is db!")
				.addField("General Commands:", "db!help - The help page you are currently on \ndb!info - Info about me \nmore WIP")
				.addField("Moderation", "db!help mod")
				.addField("db!dog", "watch me do tricks ^w^",)
			message.channel.send(embed);

			return;

		//help lists
		//moderation
		case 'help' + ' ' + 'mod':
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permissions to execute this command")
			let embed = new Discord.RichEmbed()
				.addField("Moderation Commands:", "db!mute [mention] - Mutes the selected user. \ndb!unmute [mention] - Unmutes the selected user. \ndb!del <number of messages> - Deletes the specified amount of messages.")
			message.channel.send(embed);

			return;

		//dog commands
		case 'help' + ' ' + 'dog':
			let embed = new Discord.RichEmbed()
				.addField("Dog Commands:", "db!sit - I can sit on command :3 \ndb!pet - I like getting pet :D \ndb!fetch - I can fetch like no other :3 \ndb!rollover - weeeee :D")
			message.channel.send(embed);

			return;

		//info
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

		//dog commands
		//sit
		case 'sit':
			message.channel.send("*sits down and wags*");

			return;
		
		//pet
		case 'pet':
			message.channel.send("*licks your hand and wags*");

			return;
		
		//fetch
		case 'fetch':
			message.channel.send("*happily brings back the thrown stick and puts it at your feet*");

			return;
		
		//boop
		case 'boop':
			let toBoop = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
			if(!toBoop) return message.channel.send("You did not say who you want to boop ^-^");
			if(toBoop.id === message.author.id) return message.channel.send("So selfish of you not to share your boops")
			if(toBoop.id === client.id) return message.channel.send("AAHH my nows :O")
			if(toBoop.id === message.mentions.users.first()) return message.channel.send("*boops*", message.mentions.users.first())

		//roll over
		case 'rollover':
			message.channel.send("*rolls over and barks*")
			

		//moderating commands
		//mute
		case 'mute'
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permissions to execute this command")

			let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
			if(!toMute) return message.channel.send("You did not specify a user");

			if(toMute.id === message.author.id) return message.channel.send("You can't mute yourself")
			if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't mute a member that has a higher role or has the same role as you")

			let role = message.guild.roles.find(r => r.name === "Muted");
			if(!role) {
				try{
					role = await message.guild.createRole({
						name: "Muted",
						color: "#000000",
						permissions: [],
					});

					message.guild.channels.forEach(async (channel, id) => {
						await channel.overwritePermissions(role, {
							SEND_MESSAGES: false,
							ADD_REACTIONS: false
						});
					});
				} catch (e) {
					console.log(e.stack);
				}
			}

			if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted");

			await toMute.addRole(role);
			message.channel.send("Muted");

			return;

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

		//delete messages
		case 'del':
		        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the required permissions to execute this command")
		    if (args.some(isNaN)) return message.channel.send("The input is Not a Number");
		    if (args[0] < 1 || args[0] > 99) return message.channel.send ("an amount between 1 and 99 is required")
			if (args.length === 0) return message.channel.send("You did not specify an amount");
		        message.channel.fetchMessages({limit: parseInt(args[0].trim()) + 1}).then(messages => message.channel.bulkDelete(messages));
		        console.log("deleted", args, "messages")
		         return;
	}

});
client.login(settings.token);