
import { createFlow } from '@builderbot/bot';


import { welcomeFlow } from "./welcome.flow";
import {defaulFlow} from "./default.flow"
import {mediaFlow} from "./media.flow"
import {blackListFlow} from './mute.flow'
import { idleFlow } from '../idle-custom'
import { detalFlow } from './detal.flow';
import {voiceNoteFlow} from './voce.flow'
import * as dotenv from 'dotenv';
import { personalizadoFlow } from './personalizado.flow';
import { direccionFlow } from './direccion.flow';
import { personalizadoDFlow } from './personalizadod.flow';
import { mayoristaFlow } from './mayorista.flow';
dotenv.config();

export const flow = createFlow([welcomeFlow,personalizadoDFlow, mayoristaFlow, idleFlow,blackListFlow,detalFlow,personalizadoFlow,defaulFlow,mediaFlow,voiceNoteFlow,direccionFlow])