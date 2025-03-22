import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';  // Importa el paquete cors
import productRoutes from './routes/products.js';

dotenv.config();  // Cargar las variables de entorno desde .env

const app = express();

// Configura CORS para permitir solicitudes desde tu frontend
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());

app.use('/api', productRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log('Error de conexión a MongoDB:', error));

// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});