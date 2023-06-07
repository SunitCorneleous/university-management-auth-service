import mongoose from 'mongoose';
import config from './config';
import app from './app';
import { logger, errorLogger } from './shared/logger';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      logger.info(`🚀 Server is listening on port ${config.port}`);
    });

    logger.info(`✅ Successfully connected to Database`);
  } catch (error) {
    errorLogger.error(`❌ Failed to connect Database : ${error}`);
  }
}

main();
