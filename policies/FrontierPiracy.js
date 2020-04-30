else if (args[0].toLowerCase() === "frontier piracy") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Frontier Piracy",
        fields: [,
          {
            name: "**Description:**",
            value: `-8% resource cost for Corvetts. Each level increases this by +3%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Frontier_Piracy.png"]}
                return;
}