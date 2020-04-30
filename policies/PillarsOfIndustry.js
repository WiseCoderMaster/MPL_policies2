else if (args[0].toLowerCase() === "pillars of industry") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Pillars of Indusrty",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% resource cost for production buildings. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Pillars_Of_Industry.png"]}
                return;
}