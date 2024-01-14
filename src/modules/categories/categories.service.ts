import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { ApiResult, initResult } from '../../shared/models/api.interface';
import { Categories, Category } from 'src/shared/models/task.interface';
import { Programs } from 'src/shared/models/programs.interface';
import { Task } from 'src/shared/models/task.interface';
import { ProgramsService } from 'src/modules/programs/programs.service';

@Injectable()
export class CategoriesService {
  constructor(
    private api: ApiService,
    private programsService: ProgramsService,
  ) {}

  async getAll(): Promise<ApiResult> {
    return await this.api.getAll('categories');
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById('categories', id);
  }

  async getDefault(): Promise<ApiResult> {
    const answer = await this.api.getAll('categories');
    if (answer.result) {
      const categories = answer.result as Categories;
      const defaultCategory = categories.find(
        (item) => item.isDefault === 'true',
      );
      return { ...initResult, result: defaultCategory };
    } else
      return {
        ...initResult,
        error: 'Ошибка получения значения по умолчанию!',
      };
  }

  async insert(record: Category): Promise<ApiResult> {
    return await this.api.insert('categories', record);
  }

  async update(record: Category, oldCategory: Category): Promise<ApiResult> {
    const answer = await this.api.update('categories', record);
    if (answer.result) {
      const answerPrograms = await this.programsService.getAll();
      if (answerPrograms.result) {
        const programs = answerPrograms.result as Programs;
        if (programs.length !== 0) {
          for (const program of programs) {
            const content = JSON.parse(program.content) as Task;
            if (content.category === oldCategory.name) {
              content.category = record.name;
              program.content = JSON.stringify(content);
              await this.programsService.update(program);
            }
          }
        }
      }
    }
    return answer;
  }

  async remove(id: number): Promise<ApiResult> {
    const categoryAnswer = await this.getById(id);
    const defaultAnswer = await this.getDefault();
    let defaultCategory: Category;
    if (defaultAnswer.result) {
      defaultCategory = defaultAnswer.result as Category;
    }
    let category: Category;
    if (categoryAnswer.result) {
      category = categoryAnswer.result as Category;
    } else
      return { ...initResult, error: 'Ошибка удаления записи на сервере.' };
    const answer = await this.programsService.getAll();
    if (answer.result) {
      const programs = answer.result as Programs;
      if (programs.length !== 0) {
        for (const program of programs) {
          const content = JSON.parse(program.content) as Task;
          if (content.category === category.name) {
            content.category = defaultCategory.name;
            program.content = JSON.stringify(content);
            await this.programsService.update(program);
          }
        }
      }
    }
    const result = await this.api.remove('categories', id);
    if (result.error) {
      result.error = 'Ошибка удаления записи на сервере.';
    }
    return result;
  }
}
