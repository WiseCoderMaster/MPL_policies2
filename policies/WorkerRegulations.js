else if (args[0].toLowerCase() === "worker regulations") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Worker Regulations",
        fields: [,
          {
            name: "**Description:**",
            value: `+30% harvest rate for all your mining facilities. Each level increases this by +5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/cards/fleetcadet.png"]}
                return;
}