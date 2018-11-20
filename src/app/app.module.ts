import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ButtonComponent, ModalComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent,ModalComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
    const customModal = createCustomElement(ModalComponent, { injector });
    customElements.define('custom-modal', customModal);
  }

  ngDoBootstrap() {}
}
