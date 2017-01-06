import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {VersionChildComponent} from "./version-child.component";
import {VersionParentComponent} from "./version-parent.component";

@NgModule({
    exports: [],
    declarations: [
        VersionChildComponent,
        VersionParentComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class VersionChangeModule{

}