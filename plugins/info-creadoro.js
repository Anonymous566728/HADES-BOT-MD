import fs from 'fs'
function handler(m, { conn }) {
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩* 
*Wa.me/5212411347467 (CREADOR)
*Wa.me/5222412377467 (BOT)*
*Wa.me/5212411719888 (BOT)*
*❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|YOVANI ',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫o| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/5212411347465`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/groups/987464505464904/', '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', null, null, [
['ⓞ⃟❗𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰Ó𝑵𝑩𝑶𝑻ⓞ⃟♦️', '.infobot'],
['❍͜͡➣🎁𝑫𝑶𝑵𝑨𝑹💌❍͜͡➣', '.donar'],
['🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueña|dueño|propietaria|dueño|creadora|creador)$/i
export default handler
