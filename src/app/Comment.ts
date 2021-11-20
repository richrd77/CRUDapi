export class Comment {
    public Name: string;
    public Email: string;
    public Body: string;

    constructor(name: string, email: string, body: string) {
        this.Name = name;
        this.Email = email;
        this.Body = body;
    }
}