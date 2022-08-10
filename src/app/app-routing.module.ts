import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { TitleScreenComponent } from './menu/title-screen/title-screen.component';
import {OptionsComponent} from "./menu/options/options.component";

const routes: Routes = [
  {path: 'title-screen', component: TitleScreenComponent},
  {path: 'options', component: OptionsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
