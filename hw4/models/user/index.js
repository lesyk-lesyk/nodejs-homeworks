export class User {
  constructor() {
    console.log('User module');

    this.users = [
      {
        email: '1',
        password: '1'
      },
      {
        email: '2',
        password: '2'
      }
    ];
  }

  getAllUsers() {
    return this.users;
  }

  getUser(email) {
    return this.users.filter(user => user.email = email)[0];
  }
}
