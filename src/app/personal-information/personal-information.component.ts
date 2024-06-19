import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Muhammad Aman Mirza'],
    ['DOB', '09/06/1999'],
    ['Work Experience', 'BSSE(Bachelor Of Science In Software Engineering)'],
    ['Interest', 'Programming'],
  ];

  aboutMe: string[] = [
    'I am a Full Stack Software Engineer and have good experience working on many good weighted projects.',
    'I am proficient in MongoDB, Express, React, Node (MERN/MEAN stack) web and mobile application development. I am also experienced working with MySql, Typescript, GraphQL, Dockers, and many AWS services.',
  ];
}
