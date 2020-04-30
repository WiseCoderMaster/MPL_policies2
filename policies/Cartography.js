else if (args[0].toLowerCase() === "Cartography") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Cartography",
        fields: [,
          {
            name: "**Description:**",
            value: `-8% resource cost for Scouts. Each level increases this by +3%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Cartography.png"]}
                return;
}