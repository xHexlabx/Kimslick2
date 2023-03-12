const { CommandType , user } = require("wokcommands");
const posnSchema = require("../posn-schema")
const mongoose = require("mongoose")

module.exports = {
  // Required for slash commands
  description: "Ping pong command",
  
  // Create a legacy and slash command
  type: CommandType.BOTH,

  expectedArgs : '<username><password>' ,

  options: [ {
    name: 'username',
    description: 'Your username',
    required: true,
    type : 3 ,
}
,
{
    name: 'password',
    description: 'Your password',
    required: true,
    type : 3 ,
}],

callback : async (res) => {

  const {interaction , user , args } = res;
  const username = args[0] 
  const password = args[1]
  const userid = user.id

  if(interaction){

      await mongoose.connect('mongodb+srv://tokyo682:Uraza11!@class.fpbsi.mongodb.net/test', {
          keepAlive : true
      })

      const registed = await posnSchema.findOne({user_id : `${userid}`})
      
      if(registed === null){
          await new posnSchema({user_id : `${userid}` , user_name : username , password : password}).save()
      }
      else {
          await posnSchema.updateOne({user_id : `${userid}`} ,{user_name : username , password : password} ) 
      }
      interaction.reply({content : 'register completed'})
  }

}
  
}