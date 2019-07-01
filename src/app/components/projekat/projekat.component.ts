<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
//dodato na osnovu vezbi
>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//dod 3
import { Projekat } from '../../models/projekat';
import { ProjekatService } from '../../services/projekat.service';

//dod 4
<<<<<<< HEAD
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog.component';
import {MatSortModule} from '@angular/material'; 
=======
import { MatDialog } from '@angular/material';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog.component';
>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490


@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis', 'actions']
<<<<<<< HEAD
  dataSource: MatTableDataSource<Projekat>;

  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor(public httpClient: HttpClient, public projekatService: ProjekatService, public dialog: MatDialog) { }

=======
  dataSource: Observable<Projekat[]>;

  constructor(public projekatService: ProjekatService, public dialog: MatDialog) { }
>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490

  ngOnInit() {
    this.loadData();
  }

<<<<<<< HEAD
  



  

  public loadData() {
    this.projekatService.getAllProjekat().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string){
    const dialogRef = this.dialog.open(ProjekatDialogComponent,
                                        {data:{id: id, naziv: naziv, oznaka: oznaka, opis: opis}}
    );

    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result =>{
      if (result == 1)
        this.loadData();
    })
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
=======
  public loadData() {
    this.dataSource = this.projekatService.getAllProjekat();
  }


  
// sve ovo dodato ispod nakon 4
  public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string){
    const dialogRef = this.dialog.open(ProjekatDialogComponent,
                                      {data: {id: id, naziv: naziv, oznaka: oznaka, opis: opis}}
    );

    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
        this.loadData();
      }    
    })
  }


>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490

}
