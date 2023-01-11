export interface IError {
  detail: string | {
    [key: string]: string
  }[];
  code?: string;
  status?: number;
}
