export interface StepResult {
  isSuccess: boolean;
  data?: any;
  message?: string;
}

export enum ResponseStatus {
  SUCCESS = 1000,
  FAIL = 1001,
}

export interface BasicResponse {
  status: ResponseStatus;
  message?: string;
  data?: any;
}
