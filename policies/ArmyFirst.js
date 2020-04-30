else if (args[0].toLowerCase() === "army first") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Army First",
        fields: [,
          {
            name: "**Description:**",
            value: `-6% resource cost for military buildings. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Army_First.png"]}
                return;
}