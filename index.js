const {Client,RichEmbed}= require('discord.js');
const client = new Client();
client.on('ready',()=>{
    console.log(`Mi Bot esta despierto: ${client.user.tag} `);
    if(client.user.presence.status === 'dnd'){
      console.log('El Bot esta invernando como oso',client.user.presence.status);
    }else{
        console.log('El Bot esta al tiro');
    }
    const testChanel = client.channels.find(channel => channel.name === 'canal para el Bot');
    console.log('El bot esta activo');
});

client.on('message',async message =>{
    console.log(message);
    if(message.content === 'ping'){
        message.reply('pong');
    }
    if(message.content === 'hola'){
    message.channel.send(`hola saludos ${message.author} `);
    }
    
    if(message.content.includes('jotillo')){
    message.channel.send(`No seas groser@ ${message.author} `);
    }
    if(message.content === 'cherrybit'){
    message.channel.send('https://cherrybit.com.mx');
    message.channel.send('http://labs.dipia.io');
    }
    if(message.content === '!pretty'){
    const embed = new RichEmbed()
      //los mensajes concatenados se vean bonitos
    .setTitle('Pretty Message')
    .setColor('#5BD622')
    .setAuthor('UAEM','https://crnnoticias.com/wp-content/uploads/2019/09/quetzal_agn.jpg')
    message.channel.send(embed);
    }

    if(message.content === '!clear'){
     const fetched = await message.channel.fetchMessages({limit: 100});
     message.channel.bulkDelete(fetched);
     console.log('mensaje elimnado');
    }
});



client.login('NjUwMDA0NzQwMDI1MDkwMDkz.XeFCQA.AMYRFm7FRfGWFRpk0hgns-qEwEw');

