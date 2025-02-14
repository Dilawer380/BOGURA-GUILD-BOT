module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Leiam Nash",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {

  const request = require("request");
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`𝗕𝗢𝗧 ${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
    return api.sendMessage(`⊰᯽⊱┈──╌──★★╌──╌──┈⊰᯽⊱\n_____আসসালামু আলাইকুম____\n⊰᯽⊱┈──╌──★★╌──╌──┈⊰᯽⊱\n${global.config.BOTNAME} IS BACK\n𝗻𝗼𝘄 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗯𝗼𝘁\n\n𝗽𝗿𝗲𝗳𝗶𝘅: [${global.config.PREFIX}] \n \n${global.config.PREFIX} HELP FOR LIST COMMAND`, threadID);
  }
  else {
    try {
    const request = require("request");
      const fs = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "👐𝐇𝐄𝐋𝐋𝐎,\n❤️আসসালামু আলাইকুম❤️\n✨[ {uName} ]✨\n\n𝐖𝐄𝐋𝐂𝐎𝐌𝐄✨ 𝐓𝐎\n{threadName} 𝐆𝐑𝐎𝐔𝐏🎉✨\n\n🍂গ্রুপের🌼পক্ষ🌸থেকে জানাই🪷আন্তরিক🌺শুভেচ্ছা💐ও অভিনন্দন 🌼এবং🥀গ্রুপের 🌷সকল🍂মেম্বার এর 🌿পক্ষ থেকে🥀বুক ভরা 🪷ভালোবাসা🌲\nধন্যবাদ🥰\n\n✨𝐘𝐎𝐔'𝐀𝐑 𝐎𝐔𝐑 [{soThanhVien}th] ✨𝐌𝐄𝐌𝐁𝐄𝐑✨\n✨𝐎𝐍 𝐓𝐇𝐈𝐒 𝐆𝐑𝐎𝐔𝐏✨\n\n🥰𝐏𝐋𝐄𝐀𝐒𝐄 𝐄𝐍𝐉𝐎𝐘🥰\n\n[ 𝐎𝐖𝐍𝐄𝐑: 𝐑𝐈𝐘𝐀𝐉 𝐆𝐀𝐙𝐈 ]" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);	   
      var link = [
"https://i.imgur.com/5Yi13jZ.gif",
"https://i.imgur.com/hdsoeU5.gif",
"https://i.imgur.com/52dx8Su.gif",
"https://i.imgur.com/x3eY7Jb.gif",
"https://i.imgur.com/4fD8NRB.gif",
"https://i.imgur.com/QtghudN.gif",
"https://i.imgur.com/lP2iLos.gif",
"https://i.imgur.com/62B1O4d.gif",
"https://i.imgur.com/DQKBwrP.gif",
      ];
        var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
}
