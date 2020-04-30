else if (args[0].toLowerCase() === "deep space patrols") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Deep Space Patrols",
        fields: [,
          {
            name: "**Description:**",
            value: `+24 Firepower for Patrol Ships and Scouts while running missions. Each level increases this by +4`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Deep_Space_Patrols.png"]}
                return;
}