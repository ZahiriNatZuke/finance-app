import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nComponent } from './i18n.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [
        I18nComponent
    ],
    exports: [
        I18nComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class I18nModule { }
