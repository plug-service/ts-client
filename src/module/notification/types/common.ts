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
  transport: NotificationTransports;
  host: string;
  port: number;
  basePath: string;
  protocol: string;
}
