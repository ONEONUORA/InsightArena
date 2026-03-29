import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Prediction } from '../predictions/entities/prediction.entity';
import { Market } from '../markets/entities/market.entity';
import { Notification } from '../notifications/entities/notification.entity';
import { CompetitionParticipant } from '../competitions/entities/competition-participant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Prediction,
      Market,
      Notification,
      CompetitionParticipant,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
