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
} 