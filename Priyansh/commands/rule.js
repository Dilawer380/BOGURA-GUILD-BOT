module.exports.config = {
    name: "rules",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "RIYAJ",
    description: "group rules",
    commandCategory: "random-img",
    usages: "send rules",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
    var ZiaRein3 = (`Tᴇᴀᴍ〆Bøɢᴜʀᴀ\nআসসালামু আলাইকুম।\nপ্রিয় গিল্ড মেম্বারস\n\nসর্বপ্রথম সকলকে ধন্যবাদ জানাই গিল্ড কে এত দূর আগিয়ে নিয়ে আসার জন্য,\n\nআমরা আমাদের লক্ষ্যের খুব কাছাকাছি আছি!\nতাই সকলকে বলছি এই পর্যন্ত যেভাবে সবাই খেলে গেছেন ঠিক সেই ভাবে একসাথে খেলা করবেন।\nযেভাবে গ্লরি করছেন ঠিক সেই ভাবেই করবেন আগামীতেও এবং গিল্ড ওয়ার এ অংশগ্রহণ করবেন সবাই বেশি বেশি কইরা\n\n❌❌❌❌❌❌\nNOTE:-যে প্লেয়ার গিল্ড মেম্বার এর ইনভাইট এ আসবেনা প্লাস মেম্বারদের সাথে খেলবে না,\nতারা একটু সতর্ক থাকিবা!\nপ্রতি সপ্তাহের শেষে গিল্ডের গ্লোরি এবং গিল্ড ওয়ার এর স্কোর চেক করা হবে।\nযদি কোন প্লেয়ার 100 গিল্ড ওয়ার স্কোর থেকে কম করে এবং গ্লোরি কম থাকে তাহলে তার বিরুদ্ধে গিল্ডের এর আইনের ভিত্তিতে উপযুক্ত ব্যবস্থা নেওয়া হবে।\nএবং ২ দিনের বেশি অ্যাক্টিভ না থাকলে তাঁকে Guild থেকে রিমুভ করা হবে।\n\n✅✅✅✅✅\n\n@everyone\nনতুন যারা এ্যাড হয়েছেন কস্ট করে পড়ে নিবেন তাহলে আপনাদের সুবিধা হবে।\n\nসবাই সকল প্লেয়ারদের প্রতি শ্রদ্ধা ও গিল্ডের প্রতি ভালোবাসা রাখবেন।\n\n♻️𝐆𝐑𝐎𝐔𝐏 𝐈𝐃 : ${event.threadID}\n𝐓𝐈𝐌𝐄: ${juswa}\n\nFROM\nGUILD OFFICER'S`);
    var ZiaRein = [
"https://i.imgur.com/37G0OI8.gif",
"https://i.imgur.com/cp3POj7.gif",
"https://i.imgur.com/0tSYo1f.gif",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
