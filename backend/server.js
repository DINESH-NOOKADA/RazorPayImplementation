const app = require("./app.js");
const portNumber = process.env.PORT;


app.listen(portNumber,(req,res)=>{
    console.log(`listening on PORT ${portNumber}`);
})





