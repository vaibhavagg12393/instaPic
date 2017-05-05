import { Component } from '@angular/core';
import { PostsService }  from '../services/posts.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [PostsService]
})
export class HomeComponent{
	posts;
	constructor(private postsService: PostsService){
		this.postsService.getPosts().subscribe(posts => {
        	this.posts = posts.items;
          this.profilePicture = posts.items[0].user.profile_picture;
          this.profileName = posts.items[0].user.full_name;
          this.profileUsername = posts.items[0].user.username;
    	});
	} 
}