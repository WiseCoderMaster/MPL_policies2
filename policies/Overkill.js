else if (args[0].toLowerCase() === "overkill") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Overkill",
        fields: [,
          {
            name: "**Description:**",
            value: `+4% Firepower for all fleets. Each level increases this by +0.5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Overkill.png"]}
                return;
}