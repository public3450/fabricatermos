import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import axios from 'axios';

import { main } from '../app';
import { numberClean } from './mute.flow';

export const domicilioFlow = addKeyword<Provider, Database>('mayorista')
.addAction(async (ctx, { blacklist, flowDynamic}) => {
    const toMute = numberClean(ctx.from);
    blacklist.add(toMute);
    await  ejemploEnviarMensaje();
    return;
})
.addAnswer('Perfecto! Aquí tienes nuestro catálogo de productos',
{ media: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' })
.addAnswer(
    [
        'Para poder crear tu perfil y agilizar tu pedido, por favor proporcióname los siguientes datos:',
        '',
        '• Nombre completo 👨🧑',
        '• Número de identificación (CC) 🆔',
        '• Correo electrónico 📩',
        '• Ciudad y Departamento 🌆',
        '• Dirección completa de envío 🏠',
        '• Productos (Referencia y Cantidad) 📦',
        '',
        '*¡Recuerda que el costo del envío lo asume el cliente!*'
    ].join('\n'),
    { delay: 1000, capture: true }
)


// Función para enviar un mensaje utilizando el servicio HTTP
export async function enviarMensaje(number: string, message: string, urlMedia?: string | null) {
    const endpoint = 'http://ec2-3-16-91-217.us-east-2.compute.amazonaws.com:3008/v1/messages'; // URL del endpoint configurado en tu servidor

    try {
        const response = await axios.post(endpoint, { number, message, urlMedia });
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al enviar mensaje:', error.response.data);
    }
}

// Ejemplo de uso de la función enviarMensaje
async function ejemploEnviarMensaje() {
    const numero = '+57 305 4159767';
    const mensaje = `*Agente*: +573176827341`;
    await enviarMensaje(numero, mensaje, null);
}



