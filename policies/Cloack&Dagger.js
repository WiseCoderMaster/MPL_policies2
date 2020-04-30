else if (args[0].toLowerCase() === "cloack & dagger") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Cloack & Dagger",
        fields: [,
          {
            name: "**Description:**",
            value: `+60 stealth for Scout fleets. Each level increases this by +10`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/CloacknDagger.png"]}
                return;
}