else if (args[0].toLowerCase() === "upgrade infrastructure") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Upgrade Infrastructure",
        fields: [,
          {
            name: "**Description:**",
            value: `-10% resource cost for your outposts. Your empire gains 1 outpost augmentation point. Each level decreases the cost reduction by -5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Upgrade_Infrastructure.png"]}
                return;
}