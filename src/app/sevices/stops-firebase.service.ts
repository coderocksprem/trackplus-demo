import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StopsFirebaseService {
    items: Observable<any[]>;
    constructor(db: AngularFirestore){
        this.items = db.collection('clients').doc('0CFma64O5H5dkBMICfCE').collection('jobs').doc('-LIjWDbXZIMPRPEsb1B5').collection('stops').valueChanges();
    }

    getStopsData(){
        return this.items;
    }
}
