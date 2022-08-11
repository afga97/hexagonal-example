import User from '../entities/User';

interface UserRepository {
  getById(id: string): Promise<any>;
  registerUser(user: User): Promise<User>;
}
export default UserRepository;
