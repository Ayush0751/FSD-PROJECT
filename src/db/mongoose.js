const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://127.0.0.1:27017/fsd';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true
        });
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.error('Error');
        process.exit();
    }
}
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => app.listen(3000))
//   .catch(err => console.log(err));
module.exports = connectDB;
