import { AuthDto } from './dto/auth.dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register(@Body() dto: AuthDto) {}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {}
}
