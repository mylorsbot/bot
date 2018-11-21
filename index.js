const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTE0Mjg0OTM3MTc2OTQwNTQ0.DtUs0Q.yFAylEGo8643A-MXLXILN2g7mSA'

client.on('ready', () => {
    console.log('Bot Activado!');
    client.user.setActivity('AYUDANDO AL GRUPO!');
})

const prefix = '$';
client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix+'comando')) {
        message.channel.send({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "FlamersBOT",
            url: "http://google.com",
            description: "📜Lista de comandos disponibles📜",
            fields: [{
                name: "Builds Disponibles",
                value: "$builds"
              },
              {
                name: "Comandos disponibles",
                value: "$comando"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© FlamerBot"
            }
          }
        });
        
    }
   
  if (message.content.startsWith(prefix+'builds')) {
    message.channel.send({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "FlamersBOT",
        url: "http://google.com",
        description: "📜Lista de comandos disponibles📜",
        fields: [
          {
            name: "Build detallada de liliana",
            value: "$build liliana"
          },
          {
            name: "Build detallada de batman",
            value: "$build batman"
          },
          {
            name: "Build detallada de zephys",
            value: "$build zephys"
          },
          {
            name: "Build detallada de zill",
            value: "$build zill"
          },
          {
            name: "Build detallada de fennik",
            value: "$build fennik"
          },
          {
            name: "Build detallada de oman",
            value: "$build omen"
          },
          {
            name: "Build detallada de kriknak",
            value: "$build kriknak"
          },
          {
            name: "Build detallada de zanis",
            value: "$build zanis"
          }

        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© FlamerBot"
        }
      }
    });
    
}
  
    if (message.content.startsWith ("$build kriknak")) {
      const embed = new Discord.RichEmbed()
.setTitle("FlamersBot")
.setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
.setColor(0x00AE86)
.setDescription("Heroe")
.setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
.setImage("https://preview.ibb.co/mksE2A/1.jpg")
.setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
.setTimestamp()
.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
.addField("Kriknak",
  "Clase")
.addField("Asesino/Guerrero", "_")
.addBlankField(true)
.addField("Rol", "Jungla", true);
message.channel.send({embed});
      }
    if (message.content.startsWith ("$build fennik")) {
      const embed = new Discord.RichEmbed()
.setTitle("FlamersBot")
.setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
.setColor(0x00AE86)
.setDescription("Heroe")
.setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
.setImage("https://preview.ibb.co/nmkvsA/fennik.jpg")
.setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
.setTimestamp()
.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
.addField("Fennik",
  "Clase")
.addField("Tirador", "_")
.addBlankField(true)
.addField("Rol", "Jungla", true);
message.channel.send({embed});
      }
      if (message.content.startsWith ("$build batman")) {
        const embed = new Discord.RichEmbed()
  .setTitle("FlamersBot")
  .setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
  .setColor(0x00AE86)
  .setDescription("Heroe")
  .setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
  .setImage("https://preview.ibb.co/nRhsNA/batman.jpg")
  .setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Batman",
    "Clase")
  .addField("Asesino/Guerrero", "_")
  .addBlankField(true)
  .addField("Rol", "Jungla", true);
  message.channel.send({embed});
        }

    if (message.content.startsWith ("$build zill")) {
        const embed = new Discord.RichEmbed()
  .setTitle("FlamersBot")
  .setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
  .setColor(0x00AE86)
  .setDescription("Heroe")
  .setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
  .setImage("https://preview.ibb.co/iLSKKq/zill.jpg")
  .setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Zill",
    "Clase")
  .addField("Mago/Asesino", "_")
  .addBlankField(true)
  .addField("Rol", "Jungla", true);
  message.channel.send({embed});
        }
    if (message.content.startsWith ("$build zephys")) {
      const embed = new Discord.RichEmbed()
.setTitle("FlamersBot")
.setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
.setColor(0x00AE86)
.setDescription("Heroe")
.setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
.setImage("https://preview.ibb.co/jCdhn0/1.png")
.setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
.setTimestamp()
.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
.addField("Zephys",
  "Clase")
.addField("Guerrero/Asesino", "_")
.addBlankField(true)
.addField("Rol", "Jungla", true);
message.channel.send({embed});
      } 
      if (message.content.startsWith ("$build omen")) {
        const embed = new Discord.RichEmbed()
  .setTitle("FlamersBot")
  .setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
  .setColor(0x00AE86)
  .setDescription("Heroe")
  .setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
  .setImage("https://preview.ibb.co/nDYAaV/omen1.jpg")
  .setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Omen",
    "Clase")
  .addField("Guerrero", "_")
  .addBlankField(true)
  .addField("Rol", "Solo lane/Jungla", true);
  message.channel.send({embed});
        }
        if (message.content.startsWith ("$build zanis")) {
          const embed = new Discord.RichEmbed()
    .setTitle("FlamersBot")
    .setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
    .setColor(0x00AE86)
    .setDescription("Heroe")
    .setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
    .setImage("https://preview.ibb.co/hFkgXA/zanis.jpg")
    .setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
    .setTimestamp()
    .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    .addField("Zanis",
      "Clase")
    .addField("Guerrero", "_")
    .addBlankField(true)
    .addField("Rol", "Solo lane/Jungla", true);
    message.channel.send({embed});
          }
          if (message.content.startsWith ("$build liliana")) {
            const embed = new Discord.RichEmbed()
      .setTitle("FlamersBot")
      .setAuthor("FlamerBot", "https://image.ibb.co/ddidCA/flamers.jpg")
      .setColor(0x00AE86)
      .setDescription("Heroe")
      .setFooter("Flamers", "https://image.ibb.co/ddidCA/flamers.jpg")
      .setImage("https://preview.ibb.co/gijN5V/li.jpg")
      .setThumbnail("https://image.ibb.co/ddidCA/flamers.jpg")
      .setTimestamp()
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      .addField("Liliana",
        "Clase")
      .addField("Mago/Asesino", "_")
      .addBlankField(true)
      .addField("Rol", "Midlaner", true);
      message.channel.send({embed});
            }
});
client.login(token);
