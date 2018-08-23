import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { StopsComponent } from './components/stops/stops.component';

const routes: Routes = [
    {path: '', redirectTo: 'jobs-list', pathMatch: 'full'},
    {path: 'jobs-list', component: JobsComponent},
    {path: 'stops-list', component: StopsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [
    JobsComponent,
    StopsComponent
];