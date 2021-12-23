import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() Task: string = "Shiv";
  @Input() name?: string
  constructor() { }

  ngOnInit(): void {
  }

}
