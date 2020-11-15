import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "Liste der Kursen";
  courses();
  constructor() { }

  ngOnInit(): void {
  }

}
