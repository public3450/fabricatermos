import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { addStringToBlacklist, enviarMensaje } from '../utils/utils';
import { numberClean } from './mute.flow';
import { reset, stop } from '../idle-custom'
export const detalFlow = addKeyword<Provider, Database>('detal')
.addAnswer('📦 Consulta nuestro catálogo:',
    { media:  `${process.env.CATALOGO_MAYORISTA}` })
    .addAnswer(
        [
            'Para poder crear tu perfil y agilizar tu pedido, por favor proporcióname los siguientes datos:',
            '',
            '• Nombre completo 👨 ',
            '• Número de identificación (CC) 🆔',
            '• Correo electrónico 📩',
            '• Ciudad y Departamento 🌆',
            '• Dirección completa de envío 🏠',
            '• Productos (Referencia y Cantidad) 📦',
            '',
            '*¡Recuerda que el costo del envío lo asume el cliente!*'
        ].join('\n'),
        { delay: 0, capture: false }
    )
    .addAction(async (ctx, { blacklist, flowDynamic}) => {
        const toMute = numberClean(ctx.from);
        console.log("entro")
        await  addStringToBlacklist(toMute);
        blacklist.add(toMute);
        await  ejemploEnviarMensaje(toMute);
        return;
    })


    // Ejemplo de uso de la función enviarMensaje
    async function ejemploEnviarMensaje(numeroAtencion) {
        const numero = process.env.NUMERO;
        const mensaje = `*Agente*: ${numeroAtencion}`;
        await enviarMensaje(numero, mensaje, null);
    }



