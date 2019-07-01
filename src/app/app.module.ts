import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatSidenavModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatSnackBar, MatSnackBarModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjekatComponent } from './components/projekat/projekat.component';
import { SmerComponent } from './components/smer/smer.component';
import { GrupaComponent } from './components/grupa/grupa.component';
import { StudentComponent } from './components/student/student.component';


import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component'


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjekatService } from './services/projekat.service';
import { ProjekatDialogComponent } from './components/dialogs/projekat-dialog/projekat-dialog.component';

import { SmerDialogComponent } from './components/dialogs/smer-dialog/smer-dialog.component';
import { SmerService } from './services/smer.service';

import { StudentDialogComponent } from './components/dialogs/student-dialog/student-dialog.component';
import { StudentService } from './services/student.service';

import { GrupaDialogComponent } from './components/dialogs/grupa-dialog/grupa-dialog.component';
import { GrupaService } from './services/grupa.service';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmerComponent } from './components/smer/smer.component';
import { ProjekatComponent } from './components/projekat/projekat.component';
import { GrupaComponent } from './components/grupa/grupa.component';
import { StudentComponent } from './components/student/student.component';

import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';


import {MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatDialogModule, MatInputModule} from '@angular/material';
//dodato s vezbi
import { HttpClientModule } from '@angular/common/http';
import { ProjekatService } from './services/projekat.service';

//dod 4
import { ProjekatDialogComponent } from './components/dialogs/projekat-dialog/projekat-dialog.component';
import { FormsModule } from '@angular/forms';


>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProjekatComponent,
    SmerComponent,
=======
    SmerComponent,
    ProjekatComponent,
>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490
    GrupaComponent,
    StudentComponent,
    HelpComponent,
    AuthorComponent,
    HomeComponent,
<<<<<<< HEAD
    ProjekatDialogComponent,
    SmerDialogComponent,
    StudentDialogComponent,
    GrupaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule, MatNativeDateModule, MatDatepickerModule,
    MatPaginatorModule, MatSortModule

  ],
  entryComponents:[ProjekatDialogComponent, SmerDialogComponent, GrupaDialogComponent, StudentDialogComponent],
  providers: [ProjekatService, SmerService, GrupaService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    ProjekatDialogComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    //dodato 
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,

    //dod 4
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  //dod 4
  entryComponents:[ProjekatDialogComponent],
  //dodat servis
  providers: [ProjekatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> d8e858e096d59a6e49c59e4e3ed3699731ae6490
