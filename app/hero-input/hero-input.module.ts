import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeroChildComponent} from "./hero-child.component";
import {HeroParentComponent} from "./hero-parent.component";

@NgModule({
    exports: [],
    declarations: [
        HeroChildComponent,
        HeroParentComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class HeroInputModule {

}