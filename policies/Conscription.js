else if (args[0].toLowerCase() === "conscription") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Conscription",
        fields: [,
          {
            name: "**Description:**",
            value: `+120 labor in all your stations. Each level increases this by +10`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Conscription.png"]}
                return;
}