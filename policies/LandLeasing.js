else if (args[0].toLowerCase() === "land leasing"){
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Land Leasing",
        fields: [,
          {
            name: "**Description:**",
            value: `+6% labor in all stations. -15% resource generation in all stations. Each level increases the labor modifier +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Land_Leasing.png"]}
}