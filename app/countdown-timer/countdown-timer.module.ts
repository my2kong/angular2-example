import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CountdownTimerComponent} from "./countdown-timer.component";
import {CountdownLocalVarParentComponent} from "./countdown-local-var-parent.component";
import {CountdownViewChildParentComponent} from "./countdown-view-child-parent.component";

@NgModule({
    exports: [],
    declarations: [
        CountdownTimerComponent,
        CountdownLocalVarParentComponent,
        CountdownViewChildParentComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class CountdownTimerModule{

}