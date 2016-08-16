import { NgModule } from '@angular/core';
import {MdToolbarModule} from '@angular2-material/toolbar';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
    imports: [MdToolbarModule],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent],
})

export class ToolbarModule { }
