else if (args[0].toLowerCase() === "scramble") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Scramble",
        fields: [,
          {
            name: "**Description:**",
            value: `+2 speed for all light fleets. +10 labor upkeep cost of all fleets. Each level decrases this by -1`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Scramble.png"]}
                return;
}