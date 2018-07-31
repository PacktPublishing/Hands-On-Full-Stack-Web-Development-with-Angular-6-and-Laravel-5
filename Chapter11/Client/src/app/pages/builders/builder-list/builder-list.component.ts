import { Component, OnInit } from '@angular/core';

// App imports
import { Builder } from './../builder';
import { BuildersService } from '../_services/builders.service';

@Component({
  selector: 'app-builder-list',
  templateUrl: './builder-list.component.html',
  styleUrls: ['./builder-list.component.scss']
})
export class BuilderListComponent implements OnInit {
    // Using Builder Model class
    builders: Builder[];
    isLoading: Boolean = false;

  constructor(private builderService: BuildersService) { }

  ngOnInit() {
    // Get builder detail
    this.getBuilders();
  }

  getBuilders(): void {
    this.isLoading = true;
    this.builderService.getBuilders()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Builder[]) {
    this.isLoading = false,
    this.builders = response;
  }
  protected handleError(error: any) {
    this.isLoading = false,
    console.error(error);
  }


}
