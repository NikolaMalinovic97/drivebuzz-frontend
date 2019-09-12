import { UserInfo } from './user-info.entity';

export class User {

    id: number;
    username: string;
    password: string;
    role: string;
    userInfo: UserInfo;

    constructor() {}

    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getRole() {
        return this.role;
    }

    getUserInfo() {
        return this.userInfo;
    }
}
