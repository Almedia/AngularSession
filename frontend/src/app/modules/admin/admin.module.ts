import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BkmCartDirective } from '../../directives/BkmCart.directive';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [AdminComponent, BkmCartDirective],
  bootstrap: [AdminComponent]
})
export class AdminModule implements ErrorHandler {

  handleError(error: any): void {
    console.log(error);
  }
}