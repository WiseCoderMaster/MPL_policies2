else if (args[0].toLowerCase() === "battle stations") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Battle Stations",
        fields: [,
          {
            name: "**Description:**",
            value: `+2 speed while raiding and assaulting. +10 Labor upkeep cost of all fleets. Each level decreases this by -1`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Battle_Stations.png"]}
                return;
}