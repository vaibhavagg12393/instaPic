import {Component, Input} from '@angular/core';
import { PostsService }  from '../services/posts.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
 
@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  providers: [PostsService]
  ,
  styles: [`
  	ul { padding:0; width:780px; margin:20px auto}
  	li { display:inline;}
        .tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
        }
  	.modal-content {
	    width: 670px !important;
	}
  `]
})
export class GalleryComponent { 
 
   @Input() datasource;
   selectedPost;
 
   setSelectedPost(post){
      this.selectedPost= post;	
   }
   constructor(private postsService: PostsService){
     this.postsService.getPosts().subscribe(posts => {
          this.posts = posts.items;
          this.profilePicture = posts.items[0].user.profile_picture;
          this.profileName = posts.items[0].user.full_name;
          this.profileUsername = posts.items[0].user.username;
      });
  } 
}