import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';

const routes: Routes = [
  {path:'data-binding',component:DataBindingComponent},
  {path:'if-else',component:IfElseComponent},
  {path:'for-loop',component:ForLoopComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
