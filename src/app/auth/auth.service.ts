import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  token: string;

  constructor() {}

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
      })
      .catch(error => console.log(error));
  }

  getToken() {
    this.getTokenInternal();
    return this.token;
  }

  private getTokenInternal(){
    firebase
    .auth()
    .currentUser.getToken()
    .then((token: string) => {
      this.token = token;
    });
  }
}
