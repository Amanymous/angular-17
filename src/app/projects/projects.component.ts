import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'SYCCURE',
      technologies: 'Angular, NextJS, Python and MySQL',
      description: [
        'Built CRUD API and Front-End integration with data table.',
        'Built library on Python and Deployed in PIP',
      ],
    },
    {
      title: 'SNYDER APPS',
      technologies: 'Angular',
      description: [
        'Convert KendoUI Controls to primeNG and use it in each module of the projec',
      ],
    },
    {
      title: 'KHATADAARI APP',
      technologies: 'Angular, NestJS, sequelize, MYSQL, GRPC',
      description: [
        'Khatadari App (Grpc integration +SSL Certificate), Api inAuth, (frontend/backend) Account, Vendor, Customer (full CRUD Whole Module) + Database +Microservices Approach',
        'Tax, Product, Banking, Location whole CRUD Module Frontend and backend and currently work on Upload Module of(Vendor, Customer, Account,) and Currently Working Sale Purchase and Payment',
      ],
    },
    {
      title: 'NNR USA APPS',
      technologies: 'Angular',
      description: ['Convert KendoUI Controls to primeNG and use it Module.'],
    },
    {
      title: 'Tours App',
      technologies: 'NodeJS, MongoDB',
      description: [
        'Make crud APi and write the complex queries aggregation and join core business logic',
      ],
    },
  ];
}
