import {
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  Input,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css',
})
export class LifeCycleHooksComponent {
  // @Input() title = '';
  @Input() title = { name: '' };
  @Input() counter = 0;
  loading = true;
  @ContentChild(ProfileComponent) profileContnent!: ProfileComponent;
  // we can access profileContnent in gAfterContentInit and  ngAfterViewInit
  @ViewChild('aman')
  amanElement!: ElementRef;
  name = '';

  constructor(private destroyRef: DestroyRef) {
    console.log('constructor called');
    // destroyRef.onDestroy(() => {
    //   console.log('destroyRef fired');
    // });
    setTimeout(() => {
      console.log('setTimeout');

      // this.name = this.title + 'added on ngOnInit';
      this.name = this.title.name + 'added on ngOnInit';
    }, 2000);
  }

  ngOnInit() {
    this.loading = false;

    console.log(this.title);
    console.log('onInit call');
  }

  ngOnChanges(changes: SimpleChange) {
    // ngOnChanges is called when the values of input properties change,
    // either through changes in the parent component or from internal updates.
    // and it will not change on reference
    console.log('ngOnChanges call');
    // this.title = 'aman';
    this.title.name = 'aman';
    console.log(changes);
  }

  ngDoCheck() {
    // when ever any varible or state doCheck will call
    console.log('ngDoCheck call');
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  ngAfterContentInit() {
    // it will call before ngAfterViewInit
    console.log('ngAfterContentInit call');
  }

  ngAfterViewInit() {
    console.log(this.profileContnent);
    console.log('ngAfterViewInit call');
    console.log(this.amanElement.nativeElement);
  }
}
