import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from './user.model'; // optional

//import auth from "../../../node_modules/firebase";
import { firebase } from '@firebase/app'
import '@firebase/auth'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private db: AngularFirestore) 
      {
        this.user$ = this.afAuth.authState.pipe(switchMap(user => { 
          if (user)
          {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }
          else
          {
            return of(null);
          }

          
        }))
   }

   async googleSignin(){
     const provider = new firebase.auth.GoogleAuthProvider();
     const credential =   await this.afAuth.signInWithPopup(provider);
     return this.updateUserData(credential.user);
   }

   async signOut(){
      await this.afAuth.signOut();
     return this.router.navigate(['/']);
   }

   private updateUserData({uid, email, displayName, photoURL}){
     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
     
     const data = {
       uid,
       email,
       displayName,
       photoURL
     };

     return userRef.set(data, { merge: true });

   }

   

}
