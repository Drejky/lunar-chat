export default class HttpException extends Error {
  status: number;
  message: string;
  properties: any;

  constructor(status: number, message: string, properties?: any) {
    super(message);
    this.status = status;
    this.message = message;
    this.properties = properties;
  }
}
