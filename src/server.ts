import mongoose from 'mongoose';
import config from './config';
import app from './app';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      logger.info(`🚀 Server is listening on port ${config.port}`);
    });

    logger.info(`✅ Successfully connected to Database`);
  } catch (error) {
    errorLogger.error(`❌ Failed to connect Database : ${error}`);
  }

  process.on('unhandledRejection', error => {
    console.log(
      'Unhandled rejection is detected, we are closing our server......'
    );

    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');

  if (server) {
    server.close();
  }
});
