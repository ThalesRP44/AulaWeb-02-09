import mongoose from "mongoose";

class Database{
    public async connect():Promise<void>{
        try {
            await mongoose.connect(process.env.MONGO_URI as string);
            console.log("MongoDB cenectado com secesso¹");
        } catch(error){
            console.log("erro ao conectar ao MongoDB: ", error);
            process.exit();
        }
    }
}

export default new Database();