else if (args[0].toLowerCase() === "patrol routes") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Patrol Routes",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% time cost for Patrl Ship units. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Patrol_Routes.png"]}
                return;
}