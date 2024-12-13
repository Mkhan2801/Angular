import { Injectable } from '@angular/core';

import {type Task } from '../task/task.model';

@Injectable({ providedIn: 'root' })

export class TasksService {
  private taskData = [
    {
        id: '1',
        uid:'u1',
        tital: 'Tital1',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: true,
        remark: 'update1'
      },    {
        id: '2',
        uid:'u2',
        tital: 'Tital2',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update2'
      },    {
        id: '3',
        uid:'u3',
        tital: 'Tital1',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update2'
      },    {
        id: '4',
        uid:'u4',
        tital: 'Tital4',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update2'
      },    {
        id: '5',
        uid:'u5',
        tital: 'Tital5',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update3'
      },    {
        id: '6',
        uid:'u6',
        tital: 'Tital6',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update5'
      },    {
        id: '7',
        uid:'u1',
        tital: 'Tital7',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update5'
      },    {
        id: '8',
        uid:'u2',
        tital: 'Tital8',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update6'
      },    {
        id: '9',
        uid:'u3',
        tital: 'Title 9',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update6'
      },    {
        id: '10',
        uid:'u4',
        tital: 'Tital10',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update7'
      },    {
        id: '11',
        uid:'u5',
        tital: 'Tital11',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update4'
      },    {
        id: '12',
        uid:'u6',
        tital: 'Tital12',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update8'
      },    {
        id: '13',
        uid:'u1',
        tital: 'Tital13',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update8'
      },    {
        id: '14',
        uid:'u2',
        tital: 'Tital14',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update8'
      },    {
        id: '15',
        uid:'u3',
        tital: 'Tital15',
        date: '12-dec-20',
        content: "loramLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        complite: false,
        remark: 'update8'
      },
  ] 
  
  
  // constructor() {
  //   const tasks = localStorage.getItem('tasks');

  //   if (tasks) {
  //     this.taskData = JSON.parse(tasks);
  //   }
  // }


  // private saveTasks() {
  //   localStorage.setItem('tasks', JSON.stringify(this.taskData));
  // }


  getUserTasks(userId: string) {
    return this.taskData.filter((task) => task.uid === userId);
  }

  addTask(task: Task) {
    this.taskData.unshift(task);
    // this.saveTasks()
  }


  updateRemark(remark:string, id :string){
    this.taskData.find((task)=> task.id == id)!.remark = remark  
    // this.saveTasks()
  }

  complet(taskId:string){
    this.taskData.find((task)=>task.id==taskId)!.complite=true
    // this.saveTasks()
  }
 


}  