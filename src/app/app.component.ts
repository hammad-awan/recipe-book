import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { FirebaseOptions } from "@firebase/app-types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyAKu809RywR6JbpidjJyJ_F3kuH3D4PT24",
      authDomain: "angular-recipe-book-e997f.firebaseapp.com"
    };
    firebase.initializeApp(config);
  }
}
