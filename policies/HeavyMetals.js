else if (args[0].toLowerCase() === "heavy metals") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Heavy Metals",
        fields: [,
          {
            name: "**Description:**",
            value: `+80 metal in all your stations. every level increses that by +20`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Heavy_Metals.png"]}
                return;
}