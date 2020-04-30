else if (args[0].toLowerCase() === "radio silence") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Radio Silence",
        fields: [,
          {
            name: "**Description:**",
            value: `+200 stealth for all fleets. -30% Firepower for all fleets. Each level decreases the firepower penalty by -5%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Radio_Silence.png"]}
}