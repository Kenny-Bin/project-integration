import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserEntity } from "../user/entity/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers : [AuthController],
  providers : [AuthService, LocalStrategy],

})
export class AuthModule {}