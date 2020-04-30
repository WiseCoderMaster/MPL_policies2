else if (args[0].toLowerCase() === "patriotism") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Patriotism",
        fields: [,
          {
            name: "**Description:**",
            value: `+12% speed for all light fleets. +1 Claim strength in all stations. Each level increases the station harvest rate by +2%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Patriotism.png"]}
                return;
}