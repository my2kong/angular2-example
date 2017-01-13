import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MissionControlComponent} from "./mission-control.component";
import {MissionService} from "./mission.service";
import {AstronautComponent} from "./astronaut.component";

@NgModule({
    exports: [],
    declarations: [
        MissionControlComponent,
        AstronautComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        MissionService
    ],
})
export class MissionControlModule {

}