else if (args[0].toLowerCase() === "assert autohority") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Assert Authority",
        fields: [,
          {
            name: "**Description:**",
            value: `You can now harvest from and build outposts on contested hexes. +12% Station harvest rate. Each level increases this by +2%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Assert_Authority.png"]}
                return;  
}