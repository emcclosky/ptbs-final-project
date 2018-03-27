const chalk = require('chalk');


/**
 * Represents a Logger
 * @class
 */

class Logger {
  /**
   * @method info
   * @param {string} msg - The message to be logged as info log 
   */
  info(msg) {
    return this.constructor.buildLog('cyan', msg);
  }

   /**
   * @method warn
   * @param {string} msg - The message to be logged as warning log 
   */
  warn(msg) {
    return this.constructor.buildLog('yellow', msg);
  }

  /**
   * builds console log message that includes timeStamp
   * @static buildLog
   * @param {string} color - the color of the text in the console log
   * @param {string} msg - the content of the console log 
   */
  static buildLog (color, msg) {
    return console.log(chalk[color](`${new Date().toISOString()} [flights]: `) + msg);
  }
}

module.exports = new Logger();