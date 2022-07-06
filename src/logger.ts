import { injectable } from "inversify";
import ILogger from "./interfaces/ILogger";


@injectable()
export default class Logger implements ILogger {

    public constructor() {
        console.log('🔧 Creating new logger!');
    }

    public log(msg: string) {
        console.log('📝 ' + msg);
    }
    public successful(msg: string) {
        console.log('✅ ' + msg);
    }
    public failed(msg: string) {
        console.log('❌ ' + msg);
    }
}