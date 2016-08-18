import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
    imports: [CommonModule, MdCardModule, MdInputModule, MdListModule, SharedModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [NameListService]
})

export class HomeModule { }
