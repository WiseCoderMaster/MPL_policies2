else if (args[0].toLowerCase() === "nationalization") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Nationalization",
        fields: [,
          {
            name: "**Description:**",
            value: `+3% resource output in all stations. Each level increases this by +0.5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Nationilazitaon.png"]}
                return;
}