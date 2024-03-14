import { createConnection } from 'mongoose';
import { UserSchema } from '../src/schema/user.schema';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

require('dotenv').config();

const seedDatabase = async () => {
  try {
    const conn = createConnection(process.env.DATABASE_URL);
    console.log('Connecting to database...', process.env.DATABASE_URL);
    const userModel = conn.model('User', UserSchema);

    console.log('Deleting existing data...');
    // delete all existing data
    await userModel.deleteMany({});

    console.log('Seeding users...');
    const password = await bcrypt.hash('admin', saltRounds);
    // adding new user
    await userModel.create({
      username: 'admin',
      password,
    });

    console.log('Database seeded.');

    await conn.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
