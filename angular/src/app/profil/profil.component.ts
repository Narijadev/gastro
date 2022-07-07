import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FriendsService } from '../friends.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id: string;
  user: User = new User();
  constructor(
    private _friendsService : FriendsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    this.route.params.subscribe((p) => {
      this.id = p.id;
      if (this.id !== 'new') {
        this.loadData(this.id);
      } else {
        this.user = new User();
      }
    });
  }
  async loadData(id) {
    try {
        this.isLoading = true;
        this.user = await this.userService.load(id);
        this.isLoading = false;
    } catch (e) {
        console.error(e);
        this.isLoading = false;
    }
  }

}
