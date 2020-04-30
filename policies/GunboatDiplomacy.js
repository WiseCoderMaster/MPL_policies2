else if (args[0].toLowerCase() === "gunboat diplomacy") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Gunboat Diplomacy",
        fields: [,
          {
            name: "**Description:**",
            value: `+5 Station bombing for destroyers, Frigates and Gunships. Each level increases this by +1`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Gunboat_Diplomacy.png"]}
}