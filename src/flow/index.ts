
import { createFlow } from '@builderbot/bot';
import { domicilioFlow } from './domicilio.flow';
import { recogerFlow } from './recoger.flow';
import { welcomeFlow } from "./welcome.flow";
import {alguienFlow} from "./alguien.flow"
import { idleFlow } from '../idle-custom'
import * as dotenv from 'dotenv';
dotenv.config();

export const flow = createFlow([welcomeFlow, domicilioFlow, idleFlow,recogerFlow,alguienFlow])