import { app } from './app';

const start = async () => {
//   if (!process.env.JWT_KEY) {
//     throw new Error("JWT_KEY deve ser definido para conectar")
//   }
//   if (!process.env.MONGO_URI) {
//     throw new Error("MONGO_URI deve ser definido para conectar")
//   }
//   try {
//     await mongoose.connect(process.env.MONGO_URI)
//     console.log("Conectado ao MongoDB")
//   } catch (err) {
//     console.error(err)
//   }

    app.listen(3333, () => {
        console.log('Listening on port 3000!');
    });
};

start();