else if (args[0].toLowerCase() === "obeyance") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Obeyance",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% Mission requirements. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Obeyance.png"]}
                return;
}