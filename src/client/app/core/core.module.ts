import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [NavbarComponent, ToolbarComponent],
  exports: [RouterModule, NavbarComponent, ToolbarComponent]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
