import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {VoterComponent} from "./voter.component";
import {VoteTakerComponent} from "./vote-taker.component";

@NgModule({
    exports: [],
    declarations: [
        VoterComponent,
        VoteTakerComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
})
export class VoterEventModule{

}