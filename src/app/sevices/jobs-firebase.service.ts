import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class JobsFirebaseService {
    items: Observable<any[]>;
    constructor(db: AngularFirestore){
        this.items = db.collection('clients').doc('0CFma64O5H5dkBMICfCE').collection('jobs').valueChanges();
    }

    getJobsData(){
        return this.items;
    }
}
