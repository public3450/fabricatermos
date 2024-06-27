import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset } from '../idle-custom'

export const domicilioFlow = addKeyword<Provider, Database>('mayorista')
.addAnswer(`⬇️😏`, { delay: 4000 })
.addAnswer(['Perfecto! Aquí tienes nuestro catálogo de productos'],
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
.addAnswer(
    [
        'Pronto seras atentido por un asesor'
    ].join('\n'),
    { delay: 10000, capture: true }
)