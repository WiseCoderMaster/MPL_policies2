else if (args[0].toLowerCase() === "trucker's union") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Trucker's Union",
        fields: [,
          {
            name: "**Description:**",
            value: `-8% resource cost for Industrials. Each level increases this by +3%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Truckers_Union.png"]}
                return;
}