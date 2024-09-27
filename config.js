//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpYZURZZmw3bjgrdU50aUd5aE1XNEdCL3NwbzJ3UmR1YXpHcmpZOGRXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUdZbkxZTzRCWS9lNWQzRk45VWR0TkZWZmNhdUQyQy80MDVUOTdZTjkwaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRXFSVzdZaG1leGhvdTVxOHdiU0EwVFlXUTVQbW1FQ2ZwUXk3cDZ3emtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZFhQMHQwVWhRV2J0aVRXRmZzQUFpZ1ZNMVdtMVdvSEZPTVdzci8xVFhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJeGFlQ1l4dUFHSFdaVlpubkdNd1Fpa0VxU1l4blZ6Rkpib2Zvczd2VjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpiMGxxTVRWaXE4d0pPbVA3ZXB4d0ZFeFlDb3ZNYzhDTjdCdFJQaUV6ajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0h4QkJVdHV5dlpLckhEZXVuU2hrbHJ2MlAzLzQzNnNVQS9iQmxJajVHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWC9TdEQzaXJZVXhyRUU1bEN1cGswdno2VzBmNmIwZnUxTlA2MDd3TmJtUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im81NzZXRW80aVcraUdrQ2hlVmRzUkgyZEh3dzYwdkIvMzVHd1JaZWJabkNQWC8zTk9lb1RKdjgwcWFidlZKWDZCdHV4VUdWRzdZUFhSaWxTN21jR0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJ6eWJybTVNeThGeDRrcUpFN0ZvWmlzb3AzOWV3eVFSY09wY3kwUlVISi9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNNEE4WG5HYVMxbUt1MEhOWjdfMGtRIiwicGhvbmVJZCI6ImIyMTZmNWQ5LThkZmEtNGQ1Ni05YTYxLWQ3YzVlZTc1MTA4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQm5lTFh6TGk3djIxRnNzWXc0QWtBa2MrRnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnQwMWpwYmFYNm0wNkdrVHIydzRnc2pzRjRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBMR0c2WVdMIiwibWUiOnsiaWQiOiIyMzQ4MTE1MDk2NDk5OjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZTd0SUVFRUpUYzNMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCSmRxZVhWWFdxVWdRcklrOG5wQzcyTEJnbCt1bDV6MExjcVZNOHhDbHdnPSIsImFjY291bnRTaWduYXR1cmUiOiJZdFA2U0VBZ0Q0ejRzbjVBZkh6VTduMDI3YlBlQXlpMGV6MHVUMFcxbnVqS1ZuK3l4aXpXRkZCcmJNb3VpTXNzUHVKRXdQUjRxUGlyM2FzSkpyaFVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSHdxVEtqanozeHQvVUlWSDlUV1NiMDJ2Um9POEZidHVMZ1FjQTRjVGMzQm5KVmFIZXhVWTFQcW5IdDkycW5JeE82WkR5Y0RkTGJUOGE2bTJtbnQ3Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTE1MDk2NDk5OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFTWGFubDFWMXFsSUVLeUpQSjZRdTlpd1lKZnJwZWM5QzNLbFRQTVFwY0kifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc0NzUyMzJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
