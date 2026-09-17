import "dotenv/config";
import app from "./app.js";
import database from "./config/database.js";

const port = process.env.port || 3001;

async function startServer(){
    await database.connect();

    app.listen(port, () =>{
    console.log(`server rodadndo na porta ${port}`);
}); 
}

startServer();