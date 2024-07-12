// Importa el módulo axios
import axios from 'axios';

// Importa el módulo dotenv para acceder a las variables de entorno
import dotenv from 'dotenv';

// Configura dotenv para cargar las variables de entorno
dotenv.config();

// Función para enviar un mensaje utilizando el servicio HTTP
export async function enviarMensaje(number: string, message: string, urlMedia?: string | null) {
    const endpoint = `${process.env.BASE_URL}/v1/messages`;
    try {
        const response = await axios.post(endpoint, { number, message, urlMedia });
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al enviar mensaje:', error.response.data);
    }
}