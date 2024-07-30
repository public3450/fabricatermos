import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset, start } from '../idle-custom';
import { addStringToBlacklist, enviarMensaje } from '../utils/utils';
import { direccionFlow } from './direccion.flow';

import { numberClean } from './mute.flow';
import { personalizadoFlow } from './personalizado.flow';

export const personalizadoDFlow = addKeyword<Provider, Database>('personalizado')

.addAnswer('📦 Consulta nuestro catálogo:¡',
{ media:  `${process.env.CATALOGO_PERSONALIZADO}` })
.addAnswer(
    [
        '*Menú de opciones:*',
        '1️⃣ Para  personalización  empresarial o cantidad superior a 50 unidades.',
        '2️⃣ Para personalizar cantidad inferior a 50 unidades.',
        '',
        '*Responde con el número de tu opción.*'
    ].join('\n'),
    {capture: true},
    async (ctx, { gotoFlow, fallBack}) => {
            reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
            const opcion = ctx.body
            switch (opcion) {
                case '1': {
                    return gotoFlow(direccionFlow)
                }
                case '2': {
                    return gotoFlow(personalizadoFlow)
                }


                default: {
                   return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟..')
                }
            }
        },
    []
)




