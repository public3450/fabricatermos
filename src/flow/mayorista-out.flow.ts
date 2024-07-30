import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'

import { addStringToBlacklist, enviarMensaje } from '../utils/utils';

import { numberClean } from './mute.flow';

export const mayoristaFlow = addKeyword<Provider, Database>('mayorista')

.addAnswer('📦 Consulta nuestro catálogo: Aquí encontrarás los precios de cada referencia tanto para compras al por mayor (mínimo 12 unidades) como para distribuidores (por caja o bulto).',
{ media:  `${process.env.CATALOGO_MAYORISTA}` })
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



