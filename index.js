const Discord = require('discord.js');
const client = new Discord.Client();

let count = 0
let tmpcount = 0

client.on('ready', () => {
  console.log(`登入身份 ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.channel.id === '數數字的頻道ID') {
      tmpcount = count + 1
      // 如果是機器人就忽略
    if(message.author.bot) return;
     // 打對就服一個表情符號
    if (message.content === tmpcount.toString()) {
      message.react('🤔');
      count++
    } 
    // 如果是其他內容就刪掉
    else {
      message.delete()
      message.reply(`原本可以到 **「${tmpcount}」** 的!都是因為你所以我們要從 **「1」** 開始咯！哼哼`);
      count = 0
    }
  }
})

client.login('機器人的Token')
