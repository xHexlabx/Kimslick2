const { CommandType } = require("wokcommands");

module.exports = {
  // Required for slash commands
  description: "Ping pong command",
  
  // Create a legacy and slash command
  type: CommandType.BOTH,

  // Invoked when a user runs the ping command
  callback: () => {
    // Return the same object you would use in
    // message.reply
    // or
    // interaction.reply
    // WOKCommands will reply to the message or the interaction
    // depending on how the user ran the command (legacy vs slash)
    console.log("pong");
    return {
      content: "Ponga!",
    }
  },
}