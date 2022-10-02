import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course= [
  {'id':1,
  'name':'Apprendre Angular',
  'description':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
  'image':'../../assets/angular.jpg',
},

{'id':2,
  'name':'Apprendre Typescript',
  'description':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
  'image':'../../assets/typescript.jpg',
},

{'id':3,
  'name':'Apprendre Nodejs',
  'description':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
  'image':'../../assets/nodejs.jpg',
},

{'id':4,
  'name':'Apprendre React',
  'description':'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
  'image':'../../assets/reactjs.jpg',
},
]
}
