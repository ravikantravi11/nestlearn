import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    register(CreateUserDTO:CreateUserDto){
        return CreateUserDTO
    }
    
}
