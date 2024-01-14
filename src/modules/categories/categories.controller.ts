import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ApiResult, initResult } from 'src/shared/models/api.interface';
import { CategoriesService } from './categories.service';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    return await this.categoriesService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post('insert')
  async insertProgram(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      const inserted = await this.categoriesService.insert(signInDto.record);
      answer = await this.categoriesService.getById(
        inserted.result['lastInsertRowid'],
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Put('update')
  async updateProgram(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      await this.categoriesService.update(
        signInDto.record,
        signInDto.oldCategory,
      );
      answer = await this.categoriesService.getById(signInDto.record.id);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Delete('remove/:id')
  async remove(@Param('id') id: number): Promise<ApiResult> {
    const result = await this.categoriesService.remove(id);
    return result;
  }
}
