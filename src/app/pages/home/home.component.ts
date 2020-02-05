import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { PagerService } from 'src/app/services/pager.service';
import { Person } from 'src/app/models/person';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allPersons: Person[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];


    activedItem: any = {};



    constructor(private apiService: BackendService, private pagerService: PagerService) {}



    ngOnInit() {

        this.apiService.getPersons().subscribe((res: Person[]) => {
            this.allPersons = res;

            this.setPage(1);

            // show first person
            this.activatedItem(this.pagedItems[0]);
        });

    }



    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allPersons.length, page);

        // get current page of items
        this.pagedItems = this.allPersons.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }


    activatedItem(obj: Person) {
        this.activedItem = obj;
    }

}
