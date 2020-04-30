else if (args[0].toLowerCase() === "volunteer program") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Volunteer Program",
        fields: [,
          {
            name: "**Description:**",
            value: `-6 labor cost for all light fleets. Each level increases this by +1%`

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