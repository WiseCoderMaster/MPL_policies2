else if (args[0].toLowerCase() === "centralization") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Centralization",
        fields: [,
          {
            name: "**Description:**",
            value: `+12% Mining Colony harvest rate. Each level increases this by +2%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Centralization.png"]}
}     