import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { reset } from '../idle-custom'

export const domicilioFlow = addKeyword<Provider, Database>('mayorista')
//.addAnswer(`📲 Vas a querer comerte todas estas delicias. Recuerda que puedes engallar GRATIS tu pedido con queso costeño, puerro crocante, relish de pepinillos, cebollas encurtidas y nuestras salsas artesanales ⬇️😏`, { delay: 4000 })
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