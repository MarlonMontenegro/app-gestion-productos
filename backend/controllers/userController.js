import User from '../models/UserModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


// Configura nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificar si el correo electrónico ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
        }

        // Cifrar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Enviar correo electrónico de confirmación (opcional)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Registro exitoso',
            text: 'Tu registro se ha completado con éxito.',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado:', info.response);
            }
        });

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar al usuario por correo electrónico
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Comparar contraseñas
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Generar token JWT
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Enviar token por correo electrónico
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Token de acceso',
            text: `Tu token de acceso es: ${token}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado:', info.response);
            }
        });

        res.status(200).json({ message: 'Token enviado por correo electrónico' });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const protectedRoute = async (req, res) => {
    try {
        // El middleware verifyToken ya ha verificado el token y agregado req.email
        res.status(200).json({ message: 'Ruta protegida', email: req.email });
    } catch (error) {
        console.error('Error en la ruta protegida:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export default {
    registerUser,
    loginUser,
    protectedRoute
};