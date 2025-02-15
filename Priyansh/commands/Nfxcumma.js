const fs = require('fs-extra');
module.exports.config = {
  name: "CHUMMA",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "RIYAJ-GAZI", ///Riyaj gazi
  description: "re-made by Riyaj gazi",
  commandCategory: "no prefix",
  usages: "CHUMMA",
    cooldowns: 5, 
};
/* BOT BY Riyaj-Gazi */
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😘")==0 || event.body.indexOf("😽")==0 || event.body.indexOf("😙")==0 || event.body.indexOf("😚")==0) {
    var msg = {
        body: "চুম্মা দেও কারে🫣 শরম করে আমার🙈🔪\n\n«CREDIT: RIYAJ GAZI»",
        attachment: fs.createReadStream(`Priyansh/commands/noprefix/chumma.mp3`)
      } /* NPX File credit: Riyaj-Gazi */
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
    }
  } /*BOT re-MADE BY RIYAJ-GAZI */
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
