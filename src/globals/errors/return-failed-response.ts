import { IFailedResponse } from 'src/modules/user/interfaces/failed-response.interface';

export function returnFailedResponse(
  message: string,
  code?: string,
  details?: any,
): IFailedResponse {
  return {
    success: false,
    result: {
      error: {
        message,
        code,
        details,
      },
    },
  };
}
