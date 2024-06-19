import { Component } from '@angular/core';
import { WorkExperience } from '../models/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Junior Developer',
      company: 'WizTech Pakistan',
      duration: 'Oct 2022 - Oct 2023',
      description: [
        'Khatadari App (Grpc integration +SSL Certificate), Api inAuth, (frontend/backend) Account, Vendor, Customer (full CRUD Whole Module) + Database +Microservices Approach',
        'Tax, Product, Banking, Location whole CRUD Module Frontend and backend and currently work on Upload Module of(Vendor, Customer, Account,) and Currently Working Sale Purchase and Payment',
      ],
    },
    {
      role: 'Fullstack/Web Developer',
      company: 'Freelance',
      duration: 'feb 2023 - may 2024',
      description: [
        'Miigrate the Angular 7 from Angular 14 and 15',
        'Make backend on Nodejs using Mongo DB (Tours Application)',
        'Work on Kony Tamenos Web and Mobile Banking Applications',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Hub360 Soluation PVT LTD',
      duration: 'June 2024 onward',
      description: [
        'Work on frontend Angular 17',
        'Modify this existing code base  integrete API',
        'Work on core logic Building',
      ],
    },
  ];
}
