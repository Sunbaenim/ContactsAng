import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextModule,
    PanelModule,
    CheckboxModule,
    ButtonModule,
    InputMaskModule
  ]
})
export class SharedModule { }
