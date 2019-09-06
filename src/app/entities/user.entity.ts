import { UserInfo } from './user-info.entity';

export class User {

    id: number;
    username: string;
    password: string;
    role: string;
    userInfo: UserInfo;
}
