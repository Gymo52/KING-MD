const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("2348078112891,")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/Gymo52/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '234808112891'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0b57c4c97dfca87bce76c.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'C̶a̶e̶s̶a̶r̶-̶M̶d̶' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Caesar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0x5ZzVjb2NObEt4Y2JlWTNvdmFjaTRxNTZjR25rUUdyUWJuZldjOTRXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTNRU1U2dU9GdW9CcjFFRkdEYnBQbjArRE5PWmtoK1VaemFJc2E5dnlYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQUNPZnVJRG4wYUFWYmpUUVVjK1BhYWdjQXRpQlRJZjkyQ0VuUHN4clhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWlJyMEIraDZoR2dDZEc3QWduMDh4WWRvZ2wxd2tKc1BKTStuUksreVMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCalR2N2x0YzFaMnlhSVZrS1ZWeVZBYzBRQXluRGtoaDVaMGczUzhlbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlsMmZja3NQNWkydFdLaGVWRVpiblZKTjk4dWxhSGhEbUhwSkJBYXYraTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJsN2lIT0QxeXd1dHJGc0tsZTY3cEFFR0lTZDhWSDB5c2dZK1FIWjMzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3lLY0lpSEJSYU04UXc1YmV0cnZIV3RER3FGV0hlTU4zeFhLMUZQQWlCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEvczB1dHhzekRCOUxvUTZmSS9FaWRXUUdHOU9IMENlTldUWEpPSWcvZk9yVkh3YVFIYS9rTTVLejdTOW5qWWVaWFlhbnU5bEkwMmVQWDhkWHQzZmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJWdXhMNk55TlZJOW1aL2JFenVieUtvY3MyeU1qbjJoQzI2bkU0NzAxNEY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNzgxMTI4OTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E1RTgzODE1NjFBNDBCMkUxMkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTQzNDg2NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUM0QUVDMDg2RkIzQzAxOTNGNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NDM0ODY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWa0RkQjZkb1I1ZV9IYXVGWXFQZEJnIiwicGhvbmVJZCI6IjkyNjEzY2ZlLWRlOGUtNDE3Yi1iN2Y3LThlOTJhZDMyMDI0OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSN2ZlZDJJQTJmZmtsVlkyVXVheDQySEdLZ289In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJeUY1ekVmRy9uS1Y2UjZ2S1VVY2dvajI3UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhdmdQY05FT0g4OGJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1MeGsyOGlkWHVyTEs1ZUJnRTQ2SS9PZXFTUjdmOVdRZ1hnMjRudGEwRFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inlwcmd0bDVFM1RnUVpxYkticFVPWXM1TzIvdXpKOGVXQ1k1cU1rQngxS0d5K0Y5cmRWRXc1NnI0ZG8xRVBoVHRBSmdmQ0lza3NuRVlKeEpMSnRIZERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3MnZKMitFcW9hbisvZU92Tno0RGlXckNnN20rdGJ4ZHZFZVd2dEN3Mm9LNlJtZ2o3c2JpM1lrZldhWWFLeVBCNWJJV3lqWlJpWGk0dWtIOWN1MjNqQT09In0sIm1lIjp7ImlkIjoiMjM0ODA3ODExMjg5MTozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDYWVzYXIifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA3ODExMjg5MTozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaaThaTnZJblY3cXl5dVhnWUJPT2lQem5xa2tlMy9Wa0lGNE51SjdXdEEwIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NDM0ODYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1WTSJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || false ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'Caesar' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? false : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '?' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Im here Boss' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
