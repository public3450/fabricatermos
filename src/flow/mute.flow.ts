
import { addKeyword, EVENTS } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'

const ADMIN_NUMBER = process.env.NUMERO


  export  const blackListFlow = addKeyword<Provider, Database>('mute')
    .addAction(async (ctx, { blacklist, flowDynamic}) => {
        console.log(process.env.NUMERO)
        console.log(ctx.from)
        if (ctx.from === process.env.NUMERO) {
            const toMute = numberClean(ctx.body); //Mute +34000000 message incoming
            console.log(toMute)
            const check = blacklist.checkIf(toMute);
            if (!check) {
                blacklist.add(toMute);
                console.log("muteado")
                await flowDynamic(`❌ ${toMute} muted`);
              //  await bot.sendMessage(number, message, { media: urlMedia ?? null })
                return;
            }
            console.log("desmuteado")
            blacklist.remove(toMute);
            await flowDynamic(`🆗 ${toMute} unmuted`);
            return;
        }
    });


    export const numberClean = (raw: string): string => {
        //Mute +3400000
        const number = raw.toLowerCase().replace('mute', '').replace(/\s/g, '').replace('+', '')
        // 3400000
        return number
    }