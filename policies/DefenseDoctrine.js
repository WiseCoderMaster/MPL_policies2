else if (args[0].toLowerCase() === "defense doctrine") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Defense Doctrine",
        fields: [,
          {
            name: "**Description:**",
            value: `+10% Firepower when defending. -18% Firepower when raiding and assaulting. Each level increases the firepower bonus by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Defense_Doctrime.png"]}
}