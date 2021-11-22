export class User{
  id!: number;
  username!: string;
  email!: string;

  static fromHttp(data: User): User{
    const user = new User();
    user.id = data.id;
    user.username = data.username;
    user.email = data.email;

    return user;
  }
}
