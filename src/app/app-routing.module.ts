import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';

const routes: Routes = [
  {path:'data-binding',component:DataBindingComponent},
  {path:'if-else',component:IfElseComponent},
  {path:'for-loop',component:ForLoopComponent},
  {path:'switch-case',component:SwitchCaseComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
