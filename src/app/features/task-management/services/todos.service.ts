import { Injectable } from '@angular/core';

import { DataApiService } from '../../../core/services/data-api.service';
import { TodoModel } from './todo.model';

@Injectable()
export class TodosService extends DataApiService<TodoModel> {

  getUrl(): string {
    return '/api/todos';
  }

}
