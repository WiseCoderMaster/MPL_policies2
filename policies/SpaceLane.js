else if (args[0].toLowerCase() === "space lane") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Space Lane",
        fields: [,
          {
            name: "**Description:**",
            value: `+2 speed for all fleets. +20 labor cost for all your fleets. Each level decreases this by -2`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/SpaceLane.png"]}
                return;
}