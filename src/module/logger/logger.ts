import { createLogger, format, transports } from "winston";

export enum LOG_LEVEL {
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  HTTP = "http",
  VERBOSE = "verbose",
  DEBUG = "debug",
  SILLY = "silly",
}

/**
 *
 * @param logLevel LOG_LEVEL maximum level of messages that should log, defaults to LOG_LEVEL.DEBUG
 * @returns
 */
export const makeLogger = (logLevel?: LOG_LEVEL) =>
  createLogger({
    level: logLevel || LOG_LEVEL.DEBUG,
    transports: [new transports.Console()],
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.printf(({ level, message }) => {
        return `[${level}: ${message}`;
      })
    ),
  });
