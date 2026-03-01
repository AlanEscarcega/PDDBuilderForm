import { DefaultFactory } from './DefaultFactory.js';
import { DarkTechFactory } from './DarkTechFactory.js';
import { GlassmorphismFactory } from './GlassmorphismFactory.js';
import { MinimalistaFactory } from './MinimalistaFactory.js';
import { NeobrutalismoFactory } from './NeobrutalismoFactory.js';

export class DirectorFactory {
    static getFactory(theme) {
        switch(theme) {
            case 'dark':
                return new DarkTechFactory();
            case 'glass':
                return new GlassmorphismFactory();
            case 'mini':
                return new MinimalistaFactory();
            case 'neo':
                return new NeobrutalismoFactory();
            case 'default':
            default:
                return new DefaultFactory();
        }
    }
}