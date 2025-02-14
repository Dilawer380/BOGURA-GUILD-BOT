module.exports.config = {
  name: "admin",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: " Abdulla",
  description: "admim",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/NEtmH6R.jpeg", 

            "https://i.imgur.com/iYTyVf9.jpeg", 

"https://i.imgur.com/ZKhlCHu.jpeg",

            "https://i.imgur.com/tyiQZ0p.jpeg"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝗥𝗶𝘆𝗮𝗷 𝗚𝘇𝗮𝗶\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝗥𝗶𝘆𝗮𝗷 𝗚𝗮𝘇𝗶\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝘀𝗮𝘁𝗸𝗵𝗶𝗿𝗮)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝘀𝗮𝘁𝗸𝗵𝗶𝗿𝗮, 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (20)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝙎𝙩𝙪𝙙𝙮\n𝗚𝗺𝗮𝗶𝗹        : 𝙳𝚒𝚕𝚊𝚠𝚎𝚛380@𝚐𝚖𝚊𝚒𝚕.𝚌𝚘𝚖\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : +8801797463592\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : 𝙳𝚒𝚕𝚊𝚠𝚎𝚛380\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/𝙸𝚃𝚉𝚁𝙹2.0
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
