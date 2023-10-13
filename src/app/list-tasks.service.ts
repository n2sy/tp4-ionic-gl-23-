import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListTasksService {
  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get('https://ng-tasks-c6b03.firebaseio.com/Tasks.json');
  }

  updateTask(newCheckedValue, idDocument) {
    return this.http.patch(
      `https://ng-tasks-c6b03.firebaseio.com/Tasks/${idDocument}.json`,
      {
        checked: newCheckedValue,
      }
    );
  }
  deleteTask(idDocument) {
    return this.http.delete(
      `https://ng-tasks-c6b03.firebaseio.com/Tasks/${idDocument}.json`
    );
  }

  addTask(nTask) {
    return this.http.post(
      'https://ng-tasks-c6b03.firebaseio.com/Tasks.json',
      nTask
    );
  }
}
