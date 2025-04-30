export class User {
    private static count: number = 0;
    public id: number;
    constructor(
        public username: string,
        public email: string,
        public password: string,
    ) {
        User.count++;
        this.id = User.count;
    }
    toJSON() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password
        };
    }
}