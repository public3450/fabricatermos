import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys';
import { domicilioFlow } from './domicilio.flow';
import { recogerFlow } from './recoger.flow';
import { reset, start } from '../idle-custom';

import {alguienFlow} from "./alguien.flow"

export const welcomeFlow = addKeyword<Provider, Database>(['hola', 'hoola', 'ole', 'alo', 'buenas', 'menu', 'holi', 'hol', 'oe', 'buenos'])
// .addAnswer(
//     [
//         '*¡Hola! Bienvenido a la Fábrica de los Termos🏭*',
//         '',
//         'Mi nombre es Zore👤 y soy tu asistente virtual. Estoy aquí para ayudarte a encontrar los mejores termos de Colombia 🇨🇴',
//         '',
//         'Para poder asistirte mejor, necesitaré algunos datos. Después de esto, un asesor humano estará disponible para atenderte.',
//         '',
//         '**Menú de opciones:**',
//         '1️⃣ Venta Mayorista',
//         '2️⃣ Venta Personalizado',
//         '3️⃣ Venta al Detal',
//         '4️⃣ Ubicación',
//         '',
//         'Nuestro horario de atención es de lunes a viernes de 9:00 a.m. a 6:00 p.m. y los sábados de 9:00 a.m. a 2:00 p.m.',
//         '',
//         '*Por favor, responde con el número del menú que mejor describa tu necesidad.*'
//     ].join('\n'),
    // .addAnswer(
    //     [
    //         '*¡Hola! Bienvenido a la Fábrica de los Termos🏭*',
    //         '',
    //         'Mi nombre es Zore👤 y soy tu asistente virtual. Estoy aquí para ayudarte a encontrar los mejores termos de Colombia 🇨🇴.',
    //         '',
    //         'Para brindarte una mejor experiencia, necesitaré algunos datos iniciales. Después de esto, uno de nuestros asesores humanos estará disponible para atenderte y ofrecerte una atención más personalizada.',
    //         '',
    //         '*Menú de opciones:*',
    //         '1️⃣ Venta Mayorista',
    //         '2️⃣ Venta Personalizado',
    //         '3️⃣ Venta al Detal',
    //         '4️⃣ Ubicación',
    //         '',
    //         'Nuestro horario de atención es de lunes a viernes de 9:00 a.m. a 6:00 p.m. y los sábados de 9:00 a.m. a 2:00 p.m.',
    //         '',
    //         '*Por favor, responde con el número del menú que mejor describa tu necesidad.*'
    //     ].join('\n'),
    .addAnswer(
        [
            '*¡Hola! Bienvenido a la Fábrica de los Termos🏭*',
            '',
            'Soy Zore👤, tu asistente virtual. Estoy aquí para ayudarte a encontrar los mejores termos de Colombia 🇨🇴.',
            '',
            '*Menú de opciones:*',
            '1️⃣ Venta Mayorista',
            '2️⃣ Venta Personalizado',
            '3️⃣ Venta al Detal',
            '4️⃣ Horario',
            '5️⃣ Ubicación',
            '',
            'Nuestro horario de atención es de lunes a viernes de 7:30 a.m. a 4:30 p.m. y los sábados de 7:30 a.m. a 12:00 p.m.',
            '',
            '*Responde con el número de tu opción.*'
        ].join('\n'),
        {capture: true},
        async (ctx, { gotoFlow, fallBack}) => {
                reset(ctx, gotoFlow, Number(process.env.TIEMPOINACTIVIDAD));
                const opcion = ctx.body
                switch (opcion) {
                    case '1': {
                        return gotoFlow(domicilioFlow)
                    }
                    case '2': {
                        return gotoFlow(domicilioFlow)
                    }
                    case '3': {
                        return gotoFlow(domicilioFlow)
                    }


                    default: {
                       return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟..')
                    }
                }
            },
        []
    )
