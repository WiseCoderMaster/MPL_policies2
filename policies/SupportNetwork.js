else if (args[0].toLowerCase() === "support network") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Support Network",
        fields: [,
          {
            name: "**Description:**",
            value: `Your stations can now now stream an additional 100 metal, gas and crystal. +13% cargo for freighters. Each level increases the streaming bonus by +25 of each resource, and the cargo bonus by +3%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Support_Network.png"]}
                return;
}