import {
  Body,
  Controller, HttpException, HttpStatus,
  Post
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { UserRO } from "./auth.interface";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService : AuthService,
  ) {}

  @Post('/login')
  async login(@Body() loginUserDto: LoginDto) : Promise<UserRO> {
    const _user = await this.authService.findOne(loginUserDto);

    if (!_user) {
      const error = { User : 'not found'};
      throw new HttpException({ error }, HttpStatus.UNAUTHORIZED);
    }

    let { idx, ykiho, userId, userNm } = _user;

    const user = { idx, ykiho, userId, userNm};

    return { user };
  }
}