import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _friendsService : FriendsService,) { }

  ngOnInit(): void {
  }
  updateData(value: any) {
    let body = {
      title: value.title,
      content: value.content,
      image: value.image
    }

    this._friendsService.updateData(body, `1`)
      .subscribe(response => {
        console.log(response)
      })
  }

}
