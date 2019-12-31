import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../user.model';
import { UsersService } from '../users.service';




@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'mail', 'adminType', 'adminStatus'];

  users: User[] ;

  dataSource: MatTableDataSource<User[]>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor( public userService : UsersService) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  geAllUsers() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      console.log('done');
      this.dataSource.data = data as User[] ; // on data receive populate dataSource.data array
      return data;
   });
 }



  ngOnInit() {       
    this.dataSource = new MatTableDataSource(); 
    this.dataSource.paginator = this.paginator;
    this.geAllUsers();
  }

  
}
