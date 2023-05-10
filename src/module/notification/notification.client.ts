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

const ENDPOINTS = {
  PING: "/common/ping",
  SEND_GMAIL: "/gmail/send",
};

export class NotificationClient implements INotificationClient {
  private baseURL: string;

  constructor(config: NotificationConfig) {
    const notificationConfig = {
      ...defaultNotificationConfig,
      ...config,
    };
    const { protocol, host, port, basePath } = notificationConfig;

    this.baseURL = `${protocol}://${host}:${port}/${basePath}`;
  }

  async ping(): Promise<StepResult> {
    const response = await axios.get<BasicResponse>(
      `${this.baseURL}${ENDPOINTS.PING}`
    );
    return {
      isSuccess: response.data.status === ResponseStatus.SUCCESS,
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
    return response;
  }
}
