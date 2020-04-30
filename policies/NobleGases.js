else if (args[0].toLowerCase() === "noble gases") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Noble Gases",
        fields: [,
          {
            name: "**Description:**",
            value: `+80 gas in all your stations. every level increses that by +20`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Noble_Gases.png"]}
                return;
}