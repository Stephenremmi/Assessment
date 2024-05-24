import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Invoice } from '../../models/invoice';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
    standalone: true,
    imports: [
      CommonModule, 
      MatFormFieldModule, 
      MatInputModule, 
      MatTableModule, 
      MatSortModule, 
      MatPaginatorModule]
})
export class InvoiceComponent implements OnChanges, AfterViewInit  {

  @Input() invoices!: Invoice[];
  
  displayedColumns: string[] = ['position', 'title', 'date', 'amount', 'status' ];
  dataSource = new MatTableDataSource<Invoice>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Invoice>(this.invoices);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}