else if (args[0].toLowerCase() === "attack doctrine") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Attack Doctrine",
        fields: [,
          {
            name: "**Description:**",
            value: `+10% Firepower when assaulting and raiding. -18% Firepower when defending. Each level increases the firepower bonus by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Attack_Doctrine.png"]}
}