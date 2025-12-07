import { AuthService } from './auth.service';
import { Body, Controller,Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private AuthService:AuthService){}

    @Post('register')
    async register(
        @Body() CreateUserDto:CreateUserDto
    ):Promise<CreateUserDto> {
        return await this.AuthService.register(CreateUserDto);
    }
}