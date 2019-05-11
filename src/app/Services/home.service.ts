import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFirestore } from '../../../node_modules/@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private angularFireStore:AngularFirestore) {

   }

   getHomeData():Observable<any>{
    return this.angularFireStore.collection('phones').valueChanges();
}
}
