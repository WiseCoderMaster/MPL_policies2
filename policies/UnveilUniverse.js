else if (args[0].toLowerCase() === "unveil universe") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Unveil Universe",
        fields: [,
          {
            name: "**Description:**",
            value: `+1 radius for your scan probes. +16hour duration for your scan probes. Each level increases the number of hours by +4`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Unveil_Univrse.png"]}
}