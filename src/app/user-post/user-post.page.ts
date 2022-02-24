import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.page.html',
  styleUrls: ['./user-post.page.scss'],
})
export class UserPostPage implements OnInit {
  posts: any;

  constructor(private router: Router, private navCtrl: NavController, private httpService: HttpServiceService) { }

  ngOnInit() {
    this.httpService.getUserPost().subscribe((res:any) => {
      console.log('GET Response :', res.data)
      this.posts = res.data;
    });
  }

  goBack() {
    this.navCtrl.setDirection('back');
    this.router.navigate(['/home']);
  }
}
