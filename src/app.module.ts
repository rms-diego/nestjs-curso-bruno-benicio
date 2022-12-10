import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './entities/user/user.module';

import databaseConfig from './shared/database';

@Module({
  imports: [UserModule, databaseConfig],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
