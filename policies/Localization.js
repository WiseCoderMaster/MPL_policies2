else if (args[0].toLowerCase() === "localization") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Localization",
        fields: [,
          {
            name: "**Description:**",
            value: `+12% resource cap in all your stations. Each level increases this by +2%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Localization.png"]}
                return;
}