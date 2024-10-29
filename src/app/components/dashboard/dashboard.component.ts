import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  template: `
    <div class="dashboard-grid">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Users</mat-card-title>
          <mat-card-subtitle>Active users this month</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="stat">
            <mat-icon color="primary">people</mat-icon>
            <span class="number">1,234</span>
          </div>
          <mat-progress-bar mode="determinate" value="70"></mat-progress-bar>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Revenue</mat-card-title>
          <mat-card-subtitle>Monthly revenue</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="stat">
            <mat-icon color="accent">attach_money</mat-icon>
            <span class="number">$45,678</span>
          </div>
          <mat-progress-bar mode="determinate" value="85"></mat-progress-bar>
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Orders</mat-card-title>
          <mat-card-subtitle>Total orders this week</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="stat">
            <mat-icon color="warn">shopping_cart</mat-icon>
            <span class="number">567</span>
          </div>
          <mat-progress-bar mode="determinate" value="60"></mat-progress-bar>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .stat {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 20px 0;
    }
    .number {
      font-size: 24px;
      font-weight: bold;
    }
    mat-icon {
      transform: scale(1.5);
    }
  `]
})
export class DashboardComponent {}