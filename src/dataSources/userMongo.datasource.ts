import UserRepository from '../core/repositories/user.repository';
import User from '../core/entities/User';
import MongoClient from 'mongodb';

class UserMongo implements UserRepository {

  public async getById(id: string): Promise<User> {
    const collection = await this.getCollection();
    const user: User = await collection.findOne({ id });
    return user;
  }

  public async registerUser(user: User): Promise<User>{
    const collection = await this.getCollection();
    await collection.insertOne(user)
    return user
  }

  private async getCollection() {
    const url = 'mongodb://localhost:27017';
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });

    const db = client.db('hexagonal_test');
    return db.collection('users');
  }
}
export default UserMongo;
