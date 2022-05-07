require('dotenv').config()
const { token } = process.env.DISCORD_TOKEN


if(token){
    console.log("it does exist");
}else{
    console.error()
}