import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [MaterialModule],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent],
})

export class ToolbarModule { }
