import { Component, OnInit } from '@angular/core';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  public beersList: any [];
  public requestError: any;

  constructor(private beers: BeersService) { }

  ngOnInit() {
    this.getBeers();
  }

  /**
   * Get beers, page = 1, per_page= 10
   */

  public getBeers () {
    return this.beers.get(1, 20).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  /**
   * Handling response
   */

  protected handleResponse (response: any) {
    this.requestError = null;
    return this.beersList = response;
  }

  /**
   * Handling error
   */

  protected handleError (error: any) {
    return this.requestError = error;
  }

}
