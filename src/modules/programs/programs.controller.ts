import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
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
}
