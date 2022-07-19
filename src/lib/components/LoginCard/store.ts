import UserLogin from "./UserLogin";
import type { IUserLogin } from "./interfaces";
import { browser } from '$app/env';
import { writable } from "svelte/store"

// const userSaved = browser ? window.sessionStorage.getItem('user') : new UserLogin();
// const user = persist(writable(userSaved), sessionStorage(), 'user');


  
const defaultUserValue:IUserLogin = new UserLogin();
const initialUserStringValue: string = browser ? window.sessionStorage.getItem('user'): ''
const initialUserValue: IUserLogin = browser ? JSON.parse(initialUserStringValue) ?? defaultUserValue : defaultUserValue;
  
export const user = writable<IUserLogin>(initialUserValue);
  
user.subscribe((value) => {
	if (browser) {
		let valueString = JSON.stringify(value);
		window.sessionStorage.setItem('user', valueString);
	}
});



