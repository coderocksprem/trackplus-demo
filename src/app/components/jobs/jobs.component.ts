import { Component, OnInit } from '@angular/core';
import { JobsFirebaseService } from '../../sevices/jobs-firebase.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: JobsModel[];
  constructor(private jobsService: JobsFirebaseService){
    jobsService.getJobsData().subscribe(jobs => {
      this.jobs = jobs;
    })
  }

  ngOnInit() {
  }

}
