
import { createFlow } from '@builderbot/bot';
import { mayoristaFlow } from './mayorista.flow';
import { recogerFlow } from './recoger.flow';
import { welcomeFlow } from "./welcome.flow";
import {alguienFlow} from "./alguien.flow"
import {blackListFlow} from './mute.flow'
import { idleFlow } from '../idle-custom'
import { detalFlow } from './detal.flow';
import * as dotenv from 'dotenv';
import { personalizadoFlow } from './personalizado.flow';
dotenv.config();

export const flow = createFlow([welcomeFlow, mayoristaFlow, idleFlow,recogerFlow,alguienFlow,blackListFlow,detalFlow,personalizadoFlow])