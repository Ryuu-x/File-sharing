import mongoose from 'mongoose'

const user = 'jakarsh';
const db_password = 'pEU2xpj09dLf1Cj7';

const DBConnection = async() => {

    const MONGDB_URL = `mongodb+srv://${user}:${db_password}@file-sharing.u7dhyih.mongodb.net/`;

    try {
        await mongoose.connect(MONGDB_URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
        
    } catch (e) {
        console.error("Error while connecting to the database", e.message)
    }
}

export default DBConnection;