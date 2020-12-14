import dotenv from 'dotenv';
// eslint-disable-next-line no-unused-vars
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import Order from './models/OrderModel.js';
import Product from './models/ProductModel.js';
import User from './models/UserModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    // eslint-disable-next-line no-underscore-dangle
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));
    await Product.insertMany(sampleProducts);
    // eslint-disable-next-line no-console
    console.log('Data Imported!'.green.inverse);
    // eslint-disable-next-line no-process-exit
    process.exit();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`${err.message}`.red.inverse);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    // eslint-disable-next-line no-console
    console.log('Data Destroyed!'.red.inverse);
    // eslint-disable-next-line no-process-exit
    process.exit();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`${err}`.red.inverse);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
