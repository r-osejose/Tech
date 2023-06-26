import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public target: Date,
    public done: boolean
  ){}
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

  todos = [
    new Todo(1,"Html",new Date(),false),
    new Todo(2,"Css",new Date(),false),
    new Todo(3,"Tailwind Css",new Date(),false),
    new Todo(4,"Angular",new Date(),false),

    // {id:1, description:"Study angular"},
    // {id:2, description:"Become expert in angular"},
    // {id:3, description:"Study springboot"},
    // {id:4, description:"Study java"},
    // {id:5, description:"Study javascript"}
  ]
  // todo={
  //   id: 1,
  //   description: 'Study angular'
  // }
  constructor(){}
  ngOnInit(){}

}
