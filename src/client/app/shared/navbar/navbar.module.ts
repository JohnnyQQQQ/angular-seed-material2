import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [RouterModule, MaterialModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})

export class NavbarModule { }
