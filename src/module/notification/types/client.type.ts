import { BasicResponse } from "../../base";
import { SendEmailDto } from "./common";

export interface INotificationClient {
  sendGmail(sendEmailDto: SendEmailDto): Promise<BasicResponse>;
}
