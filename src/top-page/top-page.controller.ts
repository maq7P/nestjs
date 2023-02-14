import { FindTopPageDto } from './dto/find-top-page.dto';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, '_id'>): Promise<void> {}

	@Get(':id')
	async get(@Param() id: string) {}

	@Patch(':id')
	async update(@Param() id: string, @Body() dto: TopPageModel) {}

	@Delete(':id')
	async delete(@Param() id: string): Promise<void> {}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindTopPageDto) {}
}
