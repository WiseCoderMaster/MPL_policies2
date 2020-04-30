else if (args[0].toLowerCase() === "national security") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "National Security",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% time cost for Scout units. +1 firepower to Scout units. Each level increases this by +1% and by +1 firepower`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/National_Security.png"]}
                return;
}