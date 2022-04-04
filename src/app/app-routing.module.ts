import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';

const routes: Routes = [
  { path: '', component: SearchbarComponent },
  { path: '', component: SecondpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
