import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
})
export class MainComponent  { 
	isLoggedIn: boolean;

	constructor() {
		this.isLoggedIn = false;
	}

	logIn() {
		console.log(this.isLoggedIn);
		this.isLoggedIn = true;
		console.log(this.isLoggedIn);

	}
	// onLoginWithInstagram() {
 //    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=6d55380b81ea4d6a9a7a49e004c515aa&redirect_uri=https://localhost:3000/&response_type=code`;
 //  }
}