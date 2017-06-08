import { Component } from '@angular/core';

interface MovieQuote {
  movie: string;
  quote: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieQuote: MovieQuote = {
    'quote': '',
    'movie': ''
  };

  onSubmit(): void {
    console.log("You wish to submit:", this.movieQuote);
    this.movieQuote = {
      'quote': '',
      'movie': ''
    }
  }
}
