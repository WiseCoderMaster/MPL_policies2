else if (args[0].toLowerCase() === "belligerence") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Belligerence",
        fields: [,
          {
            name: "**Description:**",
            value: `+6% plunder for Corvettes and Destroyers. Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Belligerence.png"]}
                return;
}