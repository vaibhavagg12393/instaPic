import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
})
export class MainComponent  { 
	isLoggedIn: boolean;
	private accesstoken;

	constructor(private http: Http) {
		this.isLoggedIn = false;
		// router.events.subscribe(s => {
  //     		if (s instanceof NavigationCancel) {
		//         let params = new URLSearchParams(s.url.split('#')[1]);
		//         let access_token = params.get('access_token');
		//         let code = params.get('code');
  //     		}
  //   	});
	}

	logIn() {

		var client_id = '6d55380b81ea4d6a9a7a49e004c515aa';
		var redirect_uri = 'http://localhost:3000';
		let url = 'https://api.instagram.com/oauth/authorize/?client_id='+client_id+'&redirect_uri='+redirect_uri+'&response_type=token';
		//window.location.href = url;
		// var igPop = window.open(url,"igPop");
		// this.http.get(url)
  //           .map(res => res.json());
		// var a = this.http.get()
		// 	.map(res => res.json());
		// a.subscribe(params => {
  //         this.accesstoken = params['#access_token'];
  //     });
		// if(window.location.hash) {
  //     		var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
  //     		console.log(hash);
  //     		// hash found
  // 		} else {
  //     		// No hash found
  // 		}
		
		console.log(this.isLoggedIn);
		this.isLoggedIn = true;
		console.log(this.isLoggedIn);

	}	
} 