const client = require("..");
//const simplydjs = require("simply-djs")

client.on(`messageCreate`, async (message) => {
  if (message.author.bot) return;

  //if(message.channel.type === "DM"){simplydjs.chatbot(client, message, {channelId: message.channel.id}).catch((err)=>{console.log(err)})}
    if(message.channel.type === "DM")
  {
    message.channel.send("**Sorry I dont answer to DMs**")
    message.channel.send("*ㅤㅤ But here's some help if you need :*")
    let  emb = new MessageEmbed()
    .setColor("#343A40")
    .setTitle("Axo Coder SUPPORT")
    .addField("Please Join Support Server For Any Queries/Feedback",` [**Support Server**](https://discord.gg/codersplanet) ← **Click To Join**`)
    .addField(" Not Satisfied? Contact DEV ?",
              `**Developer** → \`yoyowallach\` **Modified By** → \`axocoder\` \nㅤ╰-𒆕 You may copy the username and tag and DM him ❤️`)
    .setTimestamp()

  message.channel.send({embeds : [emb]})
  }
})