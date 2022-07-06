export default interface ILogger {
    log(msg: string): void;
    successful(msg: string): void;
    failed(msg: string): void;
}