else if (args[0].toLowerCase() === "little birds") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Little Birds",
        fields: [,
          {
            name: "**Description:**",
            value: `+1 spy. Your full spy reports reveal hidden resources. Each level increases the number of spies by +1`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Little_Birds.png"]}
                return;
}