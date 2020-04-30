else if (args[0].toLowerCase() === "industry first") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Industry First",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% resource cost for industry buildings. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Industry_First.png"]}
                return;
}