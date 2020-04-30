else if (args[0].toLowerCase() === "viva la resistance") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Viva La Resistance!",
        fields: [,
          {
            name: "**Description:**",
            value: `Corvette and Patrol ship fleet size increased by +13%. Scout time cost reduced by 3%. Labor cost for heavy and capital ships increased by 300%. Each level increases this by +0.5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Viva_La_Resistance.png"]}
                return;
}