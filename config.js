const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "601154466073"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'princeafiq@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/malaysia'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '601154466073' 
global.devs = '601154466073';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+601154466073
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0U3SFpiSi9udVBIdlJWU2pWdnk3UUlMdWl1c0djL1l6RGg3RElsTVRIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBEK05XZkRLR0JVQzZVR0xhZ0o2QWdockF5ZE5CcDZ0YzFTY2RHdHZHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTnR6NDBZM2kvS3NJbzlreEZWUWl0cGVpaVVONTBwTkhYVVAwSldkQjFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6alJQcnNSSDRxVHFKbXFRbURYUlFkY2RBUkpsVFRSb25sSmRZV1pSb0h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Na3pwRWpEN0lTZHdwMldDUkpMU3FwdFE3Yit4K0EvTmFFVUlIcXk4VVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZEbDV0Nk8wcFA5R1V0VXZCZUpYVFQ5QU5LMlFxaTdJMVBYMXhwNk1zeWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJsWDRCQkJmK1cwU0NvNENDYXZxbGRiWkZXTk4xemoyRFk4SEhQUEdtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieThhdVdTWXRhQWVzNk5RS2tWcklZUC9ZTE92czAxdldtT0U1VWh4cTR4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJMTTF0Q25oYXIzem5qUTJYUTNKREJFRnlkR3lzMDZYSXlTQm1Hb2locFNSd2MwZ1cvSGVwMlhrODFiY3ZmbVZ0VzFFdmZobGZMNE9KSFRCdEhKM0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJiNjM5RTF6N2NqcG5lMzdFNWtDT3VMZHYrMWZvUTdLZDQxODhjV0Z3MEhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYwMTE1NDQ2NjA3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNUU0ODg4OEU2OEVENzREMjgzNDU4NjkyMzNEM0RBNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA5NzI2MjgzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI2MDExNTQ0NjYwNzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDQ5NTM2Mjg0NEVCN0E2QkRFMzc1RTU2QkREOUYwQzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwOTcyNjI4NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiemR2cEVUY3VUSkdZY2UyVmM3ZDktdyIsInBob25lSWQiOiI1YjU0MWZiOC1kODY1LTQxM2YtOTcxNi1jYzhjMGNmYmEzZmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlY0SW5oa3BmRldHQ1cxU1M1OGlpUDVnaVJNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZYdlFHRDZ6R0RLcVhob0ZvYTlPQnZoYWJnbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJESEFYTFNZUyIsIm1lIjp7ImlkIjoiNjAxMTU0NDY2MDczOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5vbnltb3VzIFBlcnNvbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS255aUxzREVNZTBvYThHR0FNPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzVEtxR2Nzb3hFbmQ2WVhDaGtGTGFqUlVtcDhuSkorN3U4SFVvQzdlUDBNPSIsImFjY291bnRTaWduYXR1cmUiOiJuN3VlQ0tLT0RtS0tYYllYNm1GWWQ1bUJLandJM2hkdkE3cDRFVE9na0Z2bGw4cU9OVGpKSVNuT0loWnp2dkVDZWpZS2poRVZrVXE0ZHBWUms4RlJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTHYvMmZGNmZuMmUvMFJ6ZlhhUFIvMWs4b3BQbzBzUy92dGYwT0cxZ2lpV1Z3bmkzNXdORHI0VmZEdHVQNkZLZ3lrNkpiYWtHSDUwdzMwUFNuZm1hQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MDExNTQ0NjYwNzM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRXlxaG5MS01SSjNlbUZ3b1pCUzJvMFZKcWZKeVNmdTd2QjFLQXUzajlEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA5NzI2MjgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4rbyJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ANONYMOUS PERSON',
  packname:  process.env.PACK_NAME || 'AS',
   
  botname:   process.env.BOT_NAME === undefined ? "Anonymous-Person" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI I AM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
