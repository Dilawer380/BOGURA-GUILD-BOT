const fs = require('fs-extra');
module.exports.config = {
  name: "falaktak",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RIYAJ-GAZI", ///TanvirTamim
  description: "re-made by Riyaj-Gazi",
  commandCategory: "no prefix",
  usages: "falaktak",
    cooldowns: 5, 
};
/* BOT BY RIYAJ-GAZI */
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😇")==0 || event.body.indexOf("🙂")==0 || event.body.indexOf("🥹")==0 || event.body.indexOf("🫢")==0) {
    var msg = {
        body: "🌼Falak tak chal mera sath🤗🥰\n\n«CREDIT: RIYAJ GAZI»",
        attachment: fs.createReadStream(`Priyansh/commands/noprefix/falak.tak.mp3`)
      } /* NPX File credit: RIYAJ-GAZI*/
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
    }
  } /*BOT re-MADE BY RIYAJ-GAZI */
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
