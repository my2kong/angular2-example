import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SomeAbsoluteComponent, SomeRelativeComponent} from "./some.component";
import {SomeParentComponent} from "./some-parent.component";

@NgModule({
    exports: [],
    declarations: [
        SomeParentComponent,
        SomeRelativeComponent,
        SomeAbsoluteComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class SomeModule {

}