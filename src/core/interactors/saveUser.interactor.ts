import UserRepository from '../repositories/user.repository';
import User from '../entities/User';

const saveUserImp = (userRepository: UserRepository) => {
  async function saveUser(user: User) {
    const newUser = await userRepository.registerUser(user);
    return newUser;
  }
  return {
    saveUser
  }
}

export default saveUserImp
