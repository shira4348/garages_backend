import mongoose from "mongoose";

const connectDB = async () => {
 mongoose.connect('mongodb+srv://shira4348:PsPDHIwSDRX6vY2a@cluster0.btisu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
};

export default connectDB;