import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ApiModule } from './modules/api/api.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { SettingsModule } from './modules/settings/settings.module';
import { CryptModule } from './modules/crypt/crypt.module';
import { WorkstationsModule } from './modules/workstations/workstations.module';
import { ProgramsModule } from './modules/programs/programs.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'client'),
    }),
    ApiModule,
    AuthModule,
    UsersModule,
    SettingsModule,
    CryptModule,
    WorkstationsModule,
    ProgramsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
