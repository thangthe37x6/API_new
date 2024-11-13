import mongoose from "mongoose";
const uri = "mongodb+srv://thang0388432076:GLoiEny6o4FxEbtV@testproject.8ewew.mongodb.net/project_test?retryWrites=true&w=majority&appName=testproject"


const connectDB = async () => {
    try {
        mongoose.connect(uri, {
            // useUnifiedTopology: true,
        })
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}


export default connectDB
