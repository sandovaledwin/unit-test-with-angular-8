import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { Exercise1Component } from "./exercise-1/exercise1.component";
import { Exercise2Component } from "./exercise-2/exercise2.component";

const routes: Routes = [
  { path: "exercise-1", component: Exercise1Component },
  { path: "exercise-2", component: Exercise2Component }
];

@NgModule({
  declarations: [AppComponent, Exercise1Component, Exercise2Component],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
