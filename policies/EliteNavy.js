else if (args[0].toLowerCase() === "elite navy") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Elite Navy",
        fields: [,
          {
            name: "**Description:**",
            value: `+4% Hit Points for all fleets. Each level increases this by +0.5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Elite_Navy.png"]}
                return;
}