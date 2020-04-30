else if (args[0].toLowerCase() === "monitor the people") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Monitor the People",
        fields: [,
          {
            name: "**Description:**",
            value: `+120 scan strength from Scanners. Each level increases this by +20`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Monitor_The_People.png"]}
                return;
}