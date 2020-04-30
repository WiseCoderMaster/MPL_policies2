else if (args[0].toLowerCase() === "heavy duty") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Heavy Duty",
        fields: [,
          {
            name: "**Description:**",
            value: `+5% cago space for Industrials. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Heavy_Duty.png"]}
                return;
}