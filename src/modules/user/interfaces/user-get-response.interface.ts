import { User } from 'src/database/models/user.model';

export interface IUserGetResponse {
  success: true;
  result: { users: User[] };
}
