const { Client, IntentsBitField, Partials } = require("discord.js");
const WOK = require("wokcommands");
const path = require("path");
require("dotenv/config");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  console.log("ready!");
  new WOK({
    client,
    commandsDir: path.join(__dirname, "commands"),
  });
});

client.login(process.env.TOKEN);