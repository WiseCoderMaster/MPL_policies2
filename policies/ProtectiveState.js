else if (args[0].toLowerCase() === "protective state") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Protective State",
        fields: [,
          {
            name: "**Description:**",
            value: `+1 radius of influence for Missile Batteries. +4000 firepower  for Missile Batteries. Each level increases this by +1000`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Protective_State.png"]}
                return;
}