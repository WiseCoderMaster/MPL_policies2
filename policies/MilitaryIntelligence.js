else if (args[0].toLowerCase() === "military intelligence") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Military Intelligence",
        fields: [,
          {
            name: "**Description:**",
            value: `+2 spy strength for your covert operatives. +2 spy defense in all stations. Each level increases these by +2`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Military_Intelligence.png"]}
                return;
}