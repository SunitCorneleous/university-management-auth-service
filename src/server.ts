import mongoose from 'mongoose';
import config from './config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`🚀 Server is listening on port ${config.port}`);
    });

    console.log(`✅ Successfully connected to Database`);
  } catch (error) {
    console.log(`❌ Failed to connect Database : ${error}`);
  }
}

main();
