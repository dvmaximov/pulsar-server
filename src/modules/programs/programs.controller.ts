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
import { ProgramsService } from './programs.service';

@Controller('api/programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    return await this.programsService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post('insert')
  async insertProgram(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      const inserted = await this.programsService.insert(signInDto.record);
      answer = await this.programsService.getById(
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
      await this.programsService.update(signInDto.record);
      answer = await this.programsService.getById(signInDto.record.id);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Delete('remove/:id')
  async remove(@Param('id') id: number): Promise<ApiResult> {
    const result = await this.programsService.remove(id);
    return result;
  }
}
