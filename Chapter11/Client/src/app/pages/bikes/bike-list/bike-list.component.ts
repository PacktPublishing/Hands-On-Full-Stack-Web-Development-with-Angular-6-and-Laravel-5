import { Component, OnInit } from '@angular/core';

// App imports
import { Bike } from '../bike';
import { BikesService } from '../_services/bikes.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  // Using Bike Model class
  bikes: Bike[];
  isLoading: Boolean = false;
  public searchText: string;

  constructor(
    private bikeService: BikesService) {}

  ngOnInit() {
    // Get bike list
    this.getBikes();
  }

  getBikes(): void {
    this.isLoading = true;
    this.bikeService.getBikes()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Bike[]) {
    this.isLoading = false,
    this.bikes = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }

}
