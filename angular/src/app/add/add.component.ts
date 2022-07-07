import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _friendsService : FriendsService,) { }

  ngOnInit(): void {
  }
  updateData(value: any) {
    let body = {
      title: value.title,
      content: value.content,
      image: value.image
    }

    this._friendsService.updateData(body, `622ca8c59f6c668226f74f52`)
      .subscribe(response => {
        console.log(response)
      })
  }
}
