import { Component, OnInit } from '@angular/core';
import { Education } from '../models/model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Al-HUDA School',
      course: 'SSC',
      duration: '2003-2016',
      faculty: 'Computer Science',
    },
    {
      institute: 'Adamjee Government Science College',
      course: 'HSC',
      duration: '2016-2018',
      faculty: 'Computer Science',
    },
    {
      institute: 'Sir Syed University of Engineering and Technology',
      course: 'Graduation',
      duration: '2019-2023',
      faculty: 'BSSE(Bachelor Of Science In Software Engineering)',
    },
  ];

  ngOnInit(): void {}
}
