import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavigationComponent } from './app/components/navigation/navigation.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, DashboardComponent],
  template: `
    <app-navigation>
      <app-dashboard></app-dashboard>
    </app-navigation>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideAnimations()
  ]
});