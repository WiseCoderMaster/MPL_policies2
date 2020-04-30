else if (args[0].toLowerCase() === "merchant fleet") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Merchant Fleet",
        fields: [,
          {
            name: "**Description:**",
            value: `+3 speed for freighters. Each level increases this by +1`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Merchant_Fleet.png"]}
                return;
}