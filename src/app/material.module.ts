import { NgModule } from '@angular/core';
import { MatButtonModule ,MatFormFieldModule, MatInputModule, MatSidenavModule, 
  MatToolbarModule, MatIconModule, MatMenuModule, MatListModule,MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule ,MatFormFieldModule, MatInputModule, MatSidenavModule, 
    MatToolbarModule, MatIconModule, MatMenuModule, MatListModule,MatTableModule, MatPaginatorModule],
  exports: [MatButtonModule ,MatFormFieldModule, MatInputModule, MatSidenavModule, 
    MatToolbarModule, MatIconModule, MatMenuModule, MatListModule,MatTableModule, MatPaginatorModule]
})
export class MaterialModule{}
