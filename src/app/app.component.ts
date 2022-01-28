import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Todo } from './todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  todosValue: Todo[] = [];
  //todosValue!: Map<string, Todo[]>
  priorities = ["Low", "Medium", "High", "Urgent"];

  form: FormGroup;
  today = new Date();
  taskFormControl = new FormControl('', [Validators.required]);
  priorityFormControl = new FormControl('', [Validators.required]);
  dueDateFormControl = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder) {
    this.today.setDate(this.today.getDate());
    this.form = this.fb.group({
      task: this.taskFormControl,
      priority: this.priorityFormControl,
      dueDate: this.dueDateFormControl
    })
  }
  addtoDo() {
    console.log("Adding a todo");
    let taskId = uuidv4();
    let singleTodo = new Todo(
      this.form.value.task,
      this.form.value.priority,
      this.form.value.dueDate,
      taskId,
      false
    )

    this.todosValue.push(singleTodo);
    this.taskFormControl.reset();
    this.priorityFormControl.reset();
    this.dueDateFormControl.reset();
    localStorage.setItem(taskId, JSON.stringify(singleTodo));
    console.log("task -->" + singleTodo.task);
    console.log("priority -->" + singleTodo.priority);
    console.log("dueDate-->" + singleTodo.dueDate);
    console.log("taskId-->" + singleTodo.taskId);
  }

  checked(i: number) {
    console.log()
    if (this.todosValue[i].status == false) {
      this.todosValue[i].status = true;
      console.log("False to true " + this.todosValue[i].status)
    } else {
      this.todosValue[i].status = false;
      console.log("True to false " + this.todosValue[i].status)
    }
  }

  taskID!: String;
  editTodo(i: number) {
    this.taskFormControl.setValue(this.todosValue[i].task);
    this.dueDateFormControl.setValue(this.todosValue[i].dueDate);
    this.priorityFormControl.setValue(this.todosValue[i].priority);
    this.taskID = this.todosValue[i].taskId;
  }

  updateToDo() {
    let change = this.todosValue.find(Todo => Todo.taskId === this.taskID)!
    change.task = this.form.value.task;
    change.dueDate = this.form.value.dueDate;
    change.priority = this.form.value.priority;
    this.taskFormControl.reset();
    this.priorityFormControl.reset();
    this.dueDateFormControl.reset();
  }



  deleteTodo(i: number) {
    console.log(this.todosValue);
    this.todosValue.splice(i)
  }


}
