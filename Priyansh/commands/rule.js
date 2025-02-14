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
    var ZiaRein3 = (`🇧🇩✦𝗕𝗗𝗕𝗟𝗗✦🇧🇩\nম্যাসেঞ্জার গ্রুপে মাল্টিপ্লেয়ার খেলার নিয়ম:\n\n👉যারা 𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋 তারা 𝐌𝐀𝐒𝐒𝐀𝐍𝐆𝐄𝐑 𝐆𝐑𝐎𝐔𝐏 𝐂𝐀𝐋𝐋 এ থাকবেন\n\n১. গেমে কেউ চাপাচাপি করবেন না।\n২. পেছনে কোনো গাড়ি দেখতে পেলেই তাকে সাইড দেবেন ।\n৩. ডিজে লাগানো সম্পূর্ণ নিষিদ্ধ।\n৪. এডমিন/ট্রিপ মাস্টার/মডারেটর ছাড়া কেউ অযথা গেমে রেডি, এনটি, লিড প্লিজ ইত্যাদি বলবেন না।\n৫. এডমিন/ট্রিপ মাস্টার/মডারেটর গেমে যেসব ম্যাসেজ দেবেন তা সবসময় মেনে চলার চেষ্টা করবেন।\n৬. অযথা হর্ন বাজাবেন না।\n৭. সবাই সবার আসল নাম দিয়ে গেমে ঢুকবেন, ফেইক নাম গ্রহণযোগ্য নয়।\n৮. সবাই যে রোড দিয়ে যাবে সে রোড দিয়ে যেতে হবে, অর্থাৎ সবাই সোজা গেলে আপনাকেও সোজা যেতে হবে, আপনি অন্য রোড (ডানে/বামে) দিয়ে ঢুকতে পারবেন না।\n৯. লোডিং ম্যাপে ঢোকার পর যদি নেক্সট ওয়েট বলা হয়ে থাকে তাহলে ম্যাপ লোড নিলেই ব্রেক করে আগাবেন। তা না হলে ধাক্কাধাক্কি হয়ে লাইন বাঁকা হয়ে যায়।\n১০. যারা নতুন গ্রুপে আসবেন তারা গ্রুপ ক্রিয়েটর এর কাছ থেকে apk এবং স্পিড ফাইল সেট করে নিবেন।\n১১. যে যখন ট্রিপ দেবেন সে ট্রিপের ছবি/ভিডিয়ো করে গ্রুপে পোস্ট করবেন।\n১২. গ্রুপ থেকে করা রুম ও পাসওয়ার্ড বাইরে শেয়ার করা যাবে না। কেউ শেয়ার করেছেন এমন প্রমাণ পেলে তাকে গ্রুপ থেকে রিমুভ করা হবে।\n১৩. ট্রিপ দিতে না পারলে সমস্যার কথা ট্রিপ মাস্টার/এডমিন/মডারেটরদের জানাবেন। কেউ ৩ দিনের বেশি অ্যাক্টিভ না থাকলে তাঁকে গ্রুপ থেকে রিমুভ করা হবে।\n\n@everyone\nনতুন যারা এ্যাড হয়েছেন কস্ট করে পড়ে নিবেন তাহলে আপনাদের গেম খেলতে সুবিধা হবে।\n\n♻️𝐆𝐑𝐎𝐔𝐏 𝐈𝐃 : ${event.threadID}\n𝐓𝐈𝐌𝐄: ${juswa}\n\n🇧🇩𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋🇧🇩`);
    var ZiaRein = [
"https://i.imgur.com/37G0OI8.gif",
"https://i.imgur.com/cp3POj7.gif",
"https://i.imgur.com/0tSYo1f.gif",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
