import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NameChildComponent} from "./name-child.component";
import {NameParentComponent} from "./name-parent.component";

@NgModule({
    exports: [],
    declarations: [
        NameChildComponent,
        NameParentComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class NameSetterModule {

}