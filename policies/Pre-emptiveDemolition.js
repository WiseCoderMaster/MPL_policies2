else if (args[0].toLowerCase() === "pre-emtive demolition") {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "CPre-emtive Demolition",
        fields: [,
          {
            name: "**Description:**",
            value: `Plunder now additionally allows your raiding fleets to fire on units hidden by military hangars. +6% Firepower wjile raidings.  Each level increases this by +1%`

          }
        ],
        timestamp: new Date(), 
        footer: {
          text: "MPL BOT",
        }
      }
    }), {files: ["./images/policy/Pre-emptive_Demolition.png"]}
                return;
}