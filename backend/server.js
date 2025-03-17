import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import productRoutes from './routes/products.js';

dotenv.config();  // Cargar las variables de entorno desde .env

const app = express();
app.use(express.json());  // Habilitar el uso de JSON en las solicitudes

app.use('/api', productRoutes);  // Usa las rutas definidas

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log('Error de conexión a MongoDB:', error));

// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});