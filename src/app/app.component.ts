import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Advice, AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'advice-generator';
  public advice: Advice | undefined;

  constructor(private adviceService: AdviceService) { }
  
  public generateAdvice() {
    this.adviceService.getRandomAdvice().subscribe({
      next: (response: any) => {
        this.advice = response
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
  
}
