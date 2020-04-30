else if (args[0].toLowerCase() === "commercial empire") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Commercial Empire",
        fields: [,
          {
            name: "**Description:**",
            value: `+1 freighters for each station you own. +12% Freighter cargo capacity. Each level increases the cargo capacity boost by +2%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Commercial_Empire.png"]}
                return;
}