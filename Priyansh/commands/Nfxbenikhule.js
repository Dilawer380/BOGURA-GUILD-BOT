const fs = require('fs-extra');
module.exports.config = {
  name: "beni",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RIYAJ-GAZI", ///RIYAJ-GAZI
  description: "re-made by Riyaj gazi",
  commandCategory: "no prefix",
  usages: "khule",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🥰")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("😍")==0) {
    var msg = {
        body: "-মনে খুব ভালোবাসা_____🙀🥰\n\n«CREDIT: RIYAJ GAZI»",
        attachment: fs.createReadStream(`Priyansh/commands/noprefix/beniKhule.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
