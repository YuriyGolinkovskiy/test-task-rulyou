export interface IFailedResponse {
  success: false;
  result: {
    error: {
      message: string;
      code?: string;
      details?: any;
    };
  };
}
