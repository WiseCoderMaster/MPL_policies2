else if (args[0].toLowerCase() === "keep the vigil") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Keep the Vigil",
        fields: [,
          {
            name: "**Description:**",
            value: `+2 Station scan radius in all stations. -6% mission requirements. Each level increases this by -1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Keep_The_Vigil.png"]}
                return;
}