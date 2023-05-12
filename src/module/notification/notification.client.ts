import axios from "axios";
import { INotificationClient } from "./types/client.type";
import {
  NotificationConfig,
  SendEmailDto,
  defaultNotificationConfig,
} from "./types/common";
import {
  BasicResponse,
  ResponseStatus,
  StepResult,
} from "../base/types/common";
import { makeLogger } from "../logger/logger";

const ENDPOINTS = {
  PING: "/common/ping",
  SEND_GMAIL: "/gmail/send",
};

export class NotificationClient implements INotificationClient {
  private baseURL: string;
  private logger;

  constructor(config: NotificationConfig) {
    const notificationConfig = {
      ...defaultNotificationConfig,
      ...config,
    };
    const { protocol, host, port, basePath, logLevel } = notificationConfig;

    this.logger = makeLogger(logLevel);
    this.baseURL = `${protocol}://${host}:${port}${basePath}`;
  }

  async ping(): Promise<StepResult> {
    const randomMessage = Math.random().toString(36).substring(7);
    const response = await axios.get<BasicResponse>(
      `${this.baseURL}${ENDPOINTS.PING}`,
      {
        params: {
          message: randomMessage,
        },
      }
    );
    this.logger.debug(response.data);
    return {
      isSuccess:
        response.data.status === ResponseStatus.SUCCESS &&
        response.data.data === randomMessage,
    };
  }

  async sendGmail(sendEmailDto: SendEmailDto): Promise<BasicResponse> {
    const response = await axios.post<BasicResponse>(
      `${this.baseURL}${ENDPOINTS.SEND_GMAIL}`,
      {
        ...sendEmailDto,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    this.logger.debug(response.data);
    return response.data;
  }
}
