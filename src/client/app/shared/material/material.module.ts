import { NgModule } from '@angular/core';
import { MdButtonModule, MdFormFieldModule, MdIconModule, MdInputModule, MdToolbarModule } from '@angular/material';

const MATERIAL_MODULES = [
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdInputModule,
  MdFormFieldModule
  // add required material modules here
];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})

export class MaterialModule { }
