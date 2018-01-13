import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  register(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signIn(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.getTokenInternal();
        this.router.navigate(["/"]);
      })
      .catch(error => console.log(error));
  }

  isAuthenticated() {
    return !!this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/"]);
  }

  getToken() {
    this.getTokenInternal();
    return this.token;
  }

  private getTokenInternal() {
    firebase
      .auth()
      .currentUser.getToken()
      .then((token: string) => {
        this.token = token;
      });
  }
}
