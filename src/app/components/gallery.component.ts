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
  	.modal-content {
	    width: 800px !important;
	}
  `]
})
export class GalleryComponent {
  @Input() datasource;
  selectedPost;
  Links: string[];
  showLinks: boolean;
 
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
    this.links = ['https://www.facebook.com', 'https://www.instagram.com', 'https://twitter.com','https://blog.myblog.com','https://addablog.com',
    'https://www.facebook.com', 'https://www.instagram.com', 'https://twitter.com','https://blog.myblog.com']
    this.showLinks = false;
  }

  toggleLinks(){
      this.showLinks = !this.showLinks;
  }

  addLink(link: any){
      this.links.push(link);
  }

  deleteLink(i: any){
      this.links.splice(i, 1);
  }

  changeHeart(image:any) {
   if(image.src='./images/heart.png'){
     image.src='./images/redheart.png';
   }
   else if(image.src='./images/redheart.png'){
     image.src='./images/heart.png';
   }
  }
}