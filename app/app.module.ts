import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestComponent } from "./test/test.component";
import { PipessPipe } from './pipess.pipe';
import { DirectivesDirective } from './directives.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TestComponent, PipessPipe, DirectivesDirective, PipesComponent, DirectivesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
