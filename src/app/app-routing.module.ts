import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WealthTestComponent } from './wealth-test/wealth-test.component';



const routes: Routes = [
    {path: "", component: WealthTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
