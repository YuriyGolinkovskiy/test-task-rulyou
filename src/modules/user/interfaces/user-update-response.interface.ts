import { User } from 'src/database/models/user.model';

export interface IUserUpdateResponse {
  success: true;
  result: User;
}
