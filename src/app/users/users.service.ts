import { User } from './user.model';
/**
 * Created by Farouk Errahmani on 25/04/2017.
 */
export class UsersService {

  private users = [
    new User('Toto', 'Toto'),
    new User('Tata', 'Tata'),
    new User('Titi', 'Titi')
  ];


  getUsers() {
    return this.users.slice();
  }
}
