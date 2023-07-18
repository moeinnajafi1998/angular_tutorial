import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    IfElseComponent,
    ForLoopComponent,
    SwitchCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
