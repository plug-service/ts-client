import { BasicResponse } from "src/module/base/types/common";
import { SendEmailDto } from "./common";

export interface INotificationClient {
  sendGmail(sendEmailDto: SendEmailDto): Promise<BasicResponse>;
}
