import config from '../../config.js';
import fetch from 'node-fetch'; // Ensure you have this installed

const repo = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === "repo") {
    await m.React('🖇️'); // A gem for a precious repo!
    const repoUrl = 'https://github.com/Qadeer-Xtech/SAKON-MD';
    const imageUrl = 'https://qu.ax/hDLFX.png'; // ❗ REPLACE WITH YOUR ACTUAL IMAGE URL

    try {
      const apiUrl = `https://api.github.com/repos/Qadeer-Xtech/SAKONA-MD`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.forks_count !== undefined && data.stargazers_count !== undefined) {
        const stylishMessage = {
          image: { url: imageUrl },
          caption: `
╭───『 SAKONA-MD REPO 』───⳹
│
│🚀 *Explore the Innovation Hub!*
│
│ 📦 *Repository*: ${repoUrl}   
│ 👑 *Owner*: ❁ ════ ❃• ǫᴀᴅᴇᴇʀ ᴋʜᴀɴ •❃ ═ 
│ ⭐ *Stars*: \`${data.stargazers_count}\` 
│ ⑂ *Forks*: \`${data.forks_count}\`  
│ 🔗 *URL*: https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A
│
│ 📝 *Description*:
│ 🤝 *Join the Community!* 
│   Contribute & Shape the Future!  
│
╰────────────────⳹
> ᴘᴇᴀᴄᴇ ᴍᴅ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ❁ ════ ❃• ǫᴀᴅᴇᴇʀ ᴋʜᴀɴ •❃ ═ 💚
`.trim(),
        };

        sock.sendMessage(m.from, stylishMessage, { quoted: m });
      } else {
        sock.sendMessage(m.from, { text: '⚠️ Could not retrieve full repo details. Please try again later. 🥺', quoted: m });
      }
    } catch (error) {
      console.error("Error fetching repo info:", error);
      sock.sendMessage(m.from, { text: '🚨 Error encountered while fetching repo data. 😢', quoted: m });
    } finally {
      await m.React('✅');
    }
  }
};

export default repo;
