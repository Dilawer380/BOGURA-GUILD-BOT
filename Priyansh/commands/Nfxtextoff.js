const fs = require('fs-extra');
module.exports.config = {
  name: "text off",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RIYAJ-GAZI", ///RIYAJ-GAZI
  description: "re-made by Riyaj gazi",
  commandCategory: "no prefix",
  usages: "text off",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("text off")==0 || event.body.indexOf("no text")==0 || event.body.indexOf("Text off")==0 || event.body.indexOf("No text")==0) {
    var msg = {
        body: "____𝐓𝐄𝐗𝐓 𝐎𝐅𝐅____",
        attachment: fs.createReadStream(`Priyansh/commands/noprefix/offtext.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
