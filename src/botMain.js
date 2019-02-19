const settings = require ("../config.json");
const package = require ("../package.json")
const Discord = require("discord.js");
const prefix = settings.prefix;

const client = new Discord.Client({disableEveryone: true});

const commands = require("./commands")

client.on("ready", async () => {
	console.log(`bot is ready! ${client.user.username}`);
	client.user.setGame("For help | db!help");
	try {
		let link = await client.generateInvite(["SEND_MESSAGES", "VIEW_CHANNEL", "VIEW_AUDIT_LOG", "ADD_REACTIONS", "MANAGE_CHANNELS", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]);
		console.log('---------------------------------------------------------------------------------------------------');
		console.log(link);
		console.log('---------------------------------------------------------------------------------------------------');
	} catch(e) 
	{
		console.log(e.stack);
	}
};

client.on("message", async message =>{
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	const command = commands[messageArray(message.content.split(" "))];
	args = messageArray.slice(1);

	if (typeof command === 'function'){
		command(message)
			.catch(console.error)
			.then;
	}

	switch(addition) {

};
client.login(settings.token);