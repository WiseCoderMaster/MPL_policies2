else if (args[0].toLowerCase() === "professional raiders") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Professional Raiders",
        fields: [,
          {
            name: "**Description:**",
            value: `+6% Plunder for all fleets while raiding. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Professional_Raiders.png"]}
                return;
}