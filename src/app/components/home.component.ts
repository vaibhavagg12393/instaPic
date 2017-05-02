import { Component } from '@angular/core';
import { PostsService }  from '../services/posts.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [PostsService]
  ,
})
export class HomeComponent  { 

	images: Image[];

	constructor(private postsService: PostsService){
		this.images = [
			{
				src: "./images/american.jpg",
				likes: 45,
				description: "This is Indian Food",
				url: "https://www.facebook.com",
			},
			{
				src: "./images/indian.jpg",
				likes: 98,
				description: "This is Indian Food",
				url: "www.yelp.com",
			},
			{
				src: "./images/thai.jpg",
				likes: 67,
				description: "This is Indian Food",
				url: "www.seamless.com",
			},
			{
				src: "./images/thai.jpg",
				likes: 67,
				description: "This is Indian Food",
				url: "www.seamless.com",
			}	
		];
		this.postsService.getPosts().subscribe(posts => {
        	this.posts = posts.items;
    	});
	} 
	



}

interface Image{
	src:string;
	likes:number;
	description:string;
	url:string;
}
// '''
// curl -F 'client_id=8bc82c4abd9349dc98c6427a85249406' -F 'client_secret=15853da48daa4e9986bf2b87e3c7c219' -F 'grant_type=authorization_code' -F 'redirect_uri=https://www.example.com/login/callback' -F 'code=3539c261dd674b5f871c81c1a4f95b49' https://api.instagram.com/oauth/access_token
// {"access_token": "903873679.8bc82c4.6455a769ec174e65aa9315cfe71033d0", "user": {"id": "903873679", "username": "vaibhavagg12393", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11821743_137772149897804_1524762438_a.jpg", "full_name": "Vaibhav Aggarwal", "bio": "New York University\nsnapchat : vaibhavagg", "website": ""}}
// '''