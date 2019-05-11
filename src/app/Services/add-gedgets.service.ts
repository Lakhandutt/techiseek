import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddGedgetsService {

  constructor(private firestore: AngularFirestore) { }

  addPhone(phone) {

      return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("phones")
            .add(phone)
            .then(res => {resolve(res)}, err => reject(err));
    });
  }
}
