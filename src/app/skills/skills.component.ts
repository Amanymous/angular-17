import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular,Angular Material',
      level: 'Intermediate',
      rating: 85,
    },
    {
      name: 'Javascript /Typescript',
      level: 'Expert',
      rating: 100,
    },
    {
      name: 'Node',
      level: 'Intermediate',
      rating: 85,
    },
  ];
}
