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
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZYNUJ1cS83UVoxL2c5UHRscXArWnVETExHWnAwdG1kNVgyTUlqRm5VUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXhCdDFDN2hydlFqMmppUHo2ZEEyOU1VWXhiTDNPYUZmYlVrb1JLVnlWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTWxmQlh4aFZFZE91Mit1TGRIVWU0K2E0WUMrRHM5R2tYUHBjSEMxV1VrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dHRRa3dYdmhMK0JrRVZBUGNIWjB0NkpxMEliRTV5VGFDd1hkRmFBdms0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKdTB2OGRINXJiTHpFUXB4WFRFbTQraXJZZHZ5QTdHa1VZbThDR3VZVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZJMkFPdk5ndzRBL2dqWHVoM1Q4azJ1NjdDZ1A3VmRycnMrMHNvTGx1Q0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9JSjFkbGcvbjVJeHNHNmh2MzNrTmxvbWdQaUtmYk5hUFVld1Y3dnhYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVEvQjVnSmlCYkxSUjRCMUxwbkNwaEUwd3hqY3FidDVRc2ZZZ1Y0clVDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpYck9BQS9ncHNFR0xFUXR5UDdkU0NhTTNZRmhlWU9oK1NaazRzT2czdSttSUlTdENRS1Z1NFlnTkt2djlWc3lHaERkVDR3elppNHZvelo3dy9CaEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJFYnJmUm0vSXZYMGROZFRVM293bC83YlljOFZTaWFweDVYR01jUzlJWDhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYwMTE1NDQ2NjA3M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQjUzMzAyMzY1NzVDMjhFQUJGNkFDOUY1QjYzOEM2QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA5NzIzOTk5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI2MDExNTQ0NjYwNzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0YxRENFRDJCRDk3NjMxM0U5ODQ1MzIyMzg1QTFCRDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwOTcyNDAwMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNjJXTWp4UUZUc3VDNTNfODdIT0cyZyIsInBob25lSWQiOiJkYWZhMGM1Zi02NGU5LTRhMmUtOWUxYy0zYmE1OTdkMTcyZGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclFUS0VkV3k3Y3c2UHZoTVRKWnVrYkVuZlVjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhadTlUTTI4ZFREVjVtdVcvbzVDWlYxb2NwRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGVkdQTllNUSIsIm1lIjp7ImlkIjoiNjAxMTU0NDY2MDczOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5vbnltb3VzIFBlcnNvbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS255aUxzREVOdWlvYThHR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzVEtxR2Nzb3hFbmQ2WVhDaGtGTGFqUlVtcDhuSkorN3U4SFVvQzdlUDBNPSIsImFjY291bnRTaWduYXR1cmUiOiIwOWczNGoxOUpObEZlWkdjOVRPSlpScUUyUUIycHRpL0xXNmZ2Q25NeEZKaDAvM0M2SGZKdGlXa2VxZU5yWjFnUUJLdW5TMmIzZG92NnkwazJaaWlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibDRWa21SNEZ2bnV0MFVrcVFDVUo3Y2QvdW1TUUgyU05XWDEwYk5SODMyd0NmUEJObUkxSFlnRFN0dS8wNFJucnNwclovTGhrNlc0UXAzbmJlMGR1Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MDExNTQ0NjYwNzM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRXlxaG5MS01SSjNlbUZ3b1pCUzJvMFZKcWZKeVNmdTd2QjFLQXUzajlEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA5NzIzOTk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4rbyJ9",  //PUT Session Id Here, 
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
