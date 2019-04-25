import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { GroupComponent } from "./group/group.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [GroupComponent, AppComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [GroupComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const groupEl = createCustomElement(GroupComponent, {
      injector: this.injector
    });
    customElements.define("ndl-group", groupEl);
  }
}
