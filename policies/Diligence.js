else if (args[0].toLowerCase() === "diligence") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Diligence",
        fields: [,
          {
            name: "**Description:**",
            value: `+6% Plasma cargo for industrial fleets. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Diligence.png"]}
                return;
}