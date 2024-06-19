import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzCardModule,
    NzLayoutModule,
    NzDropDownModule,
    BannerComponent,
    SkillsComponent,
    ProjectsComponent,
    PersonalInformationComponent,
    ContactComponent,
    EducationComponent,
    WorkExperienceComponent,
    ResponsiveDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
})
export class AppComponent {
  @HostBinding('class.pc') pcMode = false;
}
