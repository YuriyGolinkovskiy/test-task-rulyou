import { User } from 'src/database/models/user.model';

export interface IUserDeleteResponse {
  success: true;
  result: User;
}
