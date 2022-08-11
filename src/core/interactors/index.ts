import saveUser from './saveUser.interactor';
import userMongo from '../../dataSources/userMongo.datasource';

const userRepository = new userMongo();

export default saveUser(userRepository);
