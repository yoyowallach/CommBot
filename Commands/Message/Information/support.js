const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "support",
  aliases: ["dev"],
  edesc:"support",
  description: `sends support server's invite link`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code


    message.delete()

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle("Need help ? Join Support Server :")

      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))

      .addFields(
        {
          name: "Click Blue Text Below :",
          value: `╰-𒆕 [Contact DEV for support](https://discord.com/channels/1103555853950386208/1180682605985800322/1180684601857933322)`
        }
      )

      .setFooter(client.getFooter(message.author));


    message.channel.send({ embeds: [emb] })

  },
};

