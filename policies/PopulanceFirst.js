else if (args[0].toLowerCase() === "populance first") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Populance First",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% resource cost for domain buildings. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Populance_First.png"]}
                return;
}