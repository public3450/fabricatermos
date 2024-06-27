import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys';
import { reset } from '../idle-custom';

export const recogerFlow = addKeyword<Provider, Database>('USUARIOS_REGISTRADOS')
//.addAnswer(`📲 Vas a querer comerte todas estas delicias. Recuerda que puedes engallar GRATIS tu pedido con queso costeño, puerro crocante, relish de pepinillos, cebollas encurtidas y nuestras salsas artesanales ⬇️😏`, { delay: 4000 })
.addAnswer([' '],
{ media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fmenu2.jpg?alt=media&token=72b28d98-881a-4d98-8814-019308bdf7e2' })
.addAnswer(
    [
        '✍🏻 Para agilizarte tu pedido, envíame:',
        '',
        '*🌭 Qué productos quieres?*',
        '*👤 Nombre completo*',
        '*📲 Celular*',
        '',
        'Recuerda que en *LOCAL DE PERRAS* puedes engallar *GRATIS* tu pedido con queso costeño, puerro crocante, relish de pepinillos, cebollas encurtidas y nuestras salsas artesanales. Al elegir tu producto, cuéntame ahí mismo con qué te lo engallamos!',
        '',
        '❗En este momento solamente tenemos opción de pedir y recoger por este medio para la sede Sabaneta'
    ].join('\n'),
    { delay: 800, capture: true }
)