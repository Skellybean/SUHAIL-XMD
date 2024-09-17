const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794019621";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_33_09_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFQxYTAwYTJwSG5YeUdpRERCelFlYjlkUDF2bWRpdDlJdUcxMGo4MERtOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTQwMTk2MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI0QTA2M0YxOTI1NzI3QzQ0NDdDMkRBOTFFOTNEMzIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjU5MDgwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoMHFaMDlhaVFmcTRoQy1DSzhENHpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2OGE0OGJjLTMzNjItNDc5My1hMDBmLTYzODU2ZmFmM2ZmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA1LFxuICAgICAgMTA5LFxuICAgICAgNjUsXG4gICAgICA4MCxcbiAgICAgIDIxMyxcbiAgICAgIDE4LFxuICAgICAgOTcsXG4gICAgICA0NyxcbiAgICAgIDIxMixcbiAgICAgIDgsXG4gICAgICAxNzksXG4gICAgICA0NCxcbiAgICAgIDE2NyxcbiAgICAgIDc1LFxuICAgICAgMjU0LFxuICAgICAgNixcbiAgICAgIDU3LFxuICAgICAgMTk4LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA2OCxcbiAgICAgIDk2LFxuICAgICAgMTIwLFxuICAgICAgMTI4LFxuICAgICAgMjEwLFxuICAgICAgMjA5LFxuICAgICAgMTYsXG4gICAgICAxMzksXG4gICAgICAxOTIsXG4gICAgICA1NCxcbiAgICAgIDExOCxcbiAgICAgIDE1LFxuICAgICAgMjIwLFxuICAgICAgMTcyLFxuICAgICAgMTQ2LFxuICAgICAgMTg4LFxuICAgICAgMjM3LFxuICAgICAgMjEsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkhOM1lTQU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NDAxOTYyMToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA1NDUwMTYzMjczNzUyOjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIu+8tO+8sO+8su+8o++8uiDvvKfvvYjvvY/vvZPvvZRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdVo0VmNReTk2bXR3WVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpoa285Wkg3Q1BKQ3BqT1hJM2U4V29wdFBreFMzc08zMWdSTmhQb1EyWDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSFo5K1MvLzBGcmRDS0IwUitUOS9JWERkeDFqTmdEN05IZmNKYm5MU1RNQk5DZUpvdUVYV0piUEpHUkgyTFNzdHpua2hJb0R0T3N2Lzd6d1laTFdVRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVjVKRnBtWWRqT3YvQ0NKOXNJOEFSczZpdTJpeG51SkNMcHZidUp6Z0Y4Y2hBNE50eTVYQ29PS2dQbHhnQnJlQWplblhaZFd1dkc1MFlQTjNWVUJMQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk0MDE5NjIxOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NTkwODA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSExRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFITFEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3WDZmNHNVSmp1WTBTRFBBLzJKSUxyMEUrVWtTamt6aXVZNFM0ZXQ3clVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDA0NDY4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2MzcxMzcyMjQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
