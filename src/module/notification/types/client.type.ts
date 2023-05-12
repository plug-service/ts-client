import { BasicResponse } from "../../base";
import { SendEmailDto } from "./common";

export interface INotificationClient {
  sendByGmail(sendEmailDto: SendEmailDto): Promise<BasicResponse>;
}
