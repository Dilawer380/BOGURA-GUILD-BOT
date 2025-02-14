module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "Mirai Team",
  description: "left notification",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
  const { threadID } = event;
const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:ss");
  const hours = moment.tz("Asia/Dhaka").format("HH");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? " " : "\n\nＫＩＣＫＥＤ ＢＹ\n 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡!";
  (typeof data.customLeave == "undefined") ? msg = "{name} {type}\n\nতুমি গ্রুপের থাকার যোগ্য না😹\nতাই লাথি মারলাম তোমার পিছে🤣\n\n★▬▬▬▬๑★★๑▬▬▬▬★\n\n\n[𝐂𝐑𝐄𝐃𝐈𝐓: 𝐑𝐈𝐘𝐀𝐉 𝐆𝐀𝐙𝐈]" : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{time}/g, time);

  var link = [  
"https://i.imgur.com/3xeZonK.gif",
"https://i.imgur.com/xahJLoI.gif",
"https://i.imgur.com/KR1WDHf.gif",
"https://i.imgur.com/lAtF5a7.gif",
"https://i.imgur.com/8kZy0rZ.gif",
"https://i.imgur.com/CXMSvCh.gif",
"https://i.imgur.com/kTntfxX.gif",
"https://i.imgur.com/9FgYCYg.gif",
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashO.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashO.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashO.jpg")).on("close", () => callback());
                                                                  }
