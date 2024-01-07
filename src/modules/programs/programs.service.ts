import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { ApiResult } from '../../shared/models/api.interface';
import { Program } from 'src/shared/models/programs.interface';

@Injectable()
export class ProgramsService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<ApiResult> {
    return await this.api.getAll('programs');
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById('programs', id);
  }

  async insert(record: Program): Promise<ApiResult> {
    return await this.api.insert('programs', record);
  }
}
