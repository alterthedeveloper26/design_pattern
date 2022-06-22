export class Logger {
  private static instance: Logger;

  private constructor(
    private logs: Array<{ message: string; timestamp: string }> = []
  ) {}

  public getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  count() {
    return this.logs.length;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

/**
 * Second way of implement
 */
class Logger2 {
  constructor(
    private logs: Array<{ message: string; timestamp: string }> = []
  ) {}

  count() {
    return this.logs.length;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

export default new Logger2();
