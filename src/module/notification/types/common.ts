import { LOG_LEVEL } from "src/module/logger/logger";

export enum NotificationTransports {
  HTTP = "http",
}

export interface SendEmailDto {
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  htmlBody: string;
}

export interface NotificationConfig {
  transport?: NotificationTransports;
  host: string;
  port: number;
  basePath?: string;
  protocol?: "http" | "https";
  logLevel?: LOG_LEVEL;
}

export const defaultNotificationConfig: NotificationConfig = {
  transport: NotificationTransports.HTTP,
  host: "localhost",
  port: 3000,
  basePath: "/v1",
  protocol: "http",
  logLevel: LOG_LEVEL.INFO,
};
