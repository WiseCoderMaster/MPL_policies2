else if (args[0].toLowerCase() === "gemini express") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Gemini Express",
        fields: [,
          {
            name: "**Description:**",
            value: `+5% cargo for industrial fleets. +2 speed for industrial fleets. Each level increases the cargo bonus by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Gamini_Express.png"]}
                return;
}