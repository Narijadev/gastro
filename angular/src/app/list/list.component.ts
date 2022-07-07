import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //public friends = [];
 // formValue !: FormGroup;
  friends :any[] = []
  public identity = "aa";
  public pi = "2.2";
  public stats = 0.56;
  constructor(
    private _friendsService : FriendsService,
   // private formbuilber: FormBuilder,
    ) { }

  ngOnInit() {
    this._friendsService.getFriends().subscribe(data => (this.friends = data));
   
  }
  /*async delete(row) {
  //const =  await this._friendsService.deleteData();
  try {
     // const p = await this.utils.confirm('Voulez vous supprimer vraiment?');
      if (p) {
          try {
            await this._friendsService.deleteData(row._id);
          /*  this.utils.toastSuccess();
            this.loadData();*/
    /*      } catch (e) {
             // this.utils.toastError();
          }
      }
  } catch (e) {
 // }
  }*/
}
