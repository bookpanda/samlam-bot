import { createLogger, format, transports } from "winston";
import { config } from "../config/config";

const { NODE_ENV } = config;
export const logger = createLogger();

if (NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}
