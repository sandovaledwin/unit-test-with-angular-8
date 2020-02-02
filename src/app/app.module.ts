import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { Exercise1Component } from "./exercise-1/exercise1.component";

const routes: Routes = [{ path: "exercise-1", component: Exercise1Component }];

@NgModule({
  declarations: [AppComponent, Exercise1Component],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
