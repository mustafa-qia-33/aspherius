const client = require("../index.js");
const { Collection } = require("discord.js")
const path = require('path');
const { readdirSync } = require("fs")
const fs = require("fs")
const config = require("../config.js")
const { joinVoiceChannel } = require('@discordjs/voice');

const { ActivityType } = require("discord.js")
module.exports = {
  name: 'ready',
  once: true,
  execute(client) {

    client.user.setActivity("LEROXİS❤LUWERSC")
    client.user.setStatus(config.Bot.DurumTipi)
    joinVoiceChannel({
      channelId: "1208904161148674058",
      guildId: "1204083771465531482",
      adapterCreator: client.guilds.cache.get("1204083771465531482").voiceAdapterCreator,
      selfDeaf: true,
      selfMute: false
    });
  }
};

