else if (args[0].toLowerCase() === "precious stones") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Precious Stones",
        fields: [,
          {
            name: "**Description:**",
            value: `+80 crystal in all your stations. every level increses that by +20`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Precious_Stones.png"]}
                return;
}