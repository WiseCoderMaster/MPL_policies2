else if (args[0].toLowerCase() === "justified hostilities") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Justified Hostilities",
        fields: [,
          {
            name: "**Description:**",
            value: `-20% Firepower for units on NPC stations affected by your sabotage. +11% Hitpoints while raiding. Each level increases the hitpoint bonus by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policies/Justified_Hostilities.png"]}
                return;
}