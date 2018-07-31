import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App imports
import { Builder } from './../builder';
import { BuildersService } from '../_services/builders.service';

@Component({
  selector: 'app-builder-detail',
  templateUrl: './builder-detail.component.html',
  styleUrls: ['./builder-detail.component.scss']
})
export class BuilderDetailComponent implements OnInit {

  builder: Builder;
  isLoading: Boolean = false;

  constructor(
    private buildersService: BuildersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get builder detail
    this.getBuilderDetail();
  }

  getBuilderDetail(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.buildersService.getBuilderDetail(id)
      .subscribe(builder => {
        this.isLoading = false;
        this.builder = builder['data'];
      });
  }

}
