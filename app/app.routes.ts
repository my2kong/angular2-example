import {Routes, RouterModule} from '@angular/router';

// Component
import {IntroComponent} from "./intro/intro.component";
import {HeroParentComponent} from "./hero-input/hero-parent.component";
import {NameParentComponent} from "./name-setter/name-parent.component";
import {VersionParentComponent} from "./version-change/version-parent.component";
import {VoteTakerComponent} from "./voter-event/vote-taker.component";
import {CountdownLocalVarParentComponent} from "./countdown-timer/countdown-local-var-parent.component";
import {CountdownViewChildParentComponent} from "./countdown-timer/countdown-view-child-parent.component";
import {MissionControlComponent} from "./mission-control/mission-control.component";

export const ROUTES: Routes = [
    {path: '', component: IntroComponent},
    {path: 'hero-input', component: HeroParentComponent},
    {path: 'name-setter', component: NameParentComponent},
    {path: 'version-change', component: VersionParentComponent},
    {path: 'voter-event', component: VoteTakerComponent},
    {path: 'countdown-timer-local', component: CountdownLocalVarParentComponent},
    {path: 'countdown-timer-viewchild', component: CountdownViewChildParentComponent},
    {path: 'mission-control', component: MissionControlComponent},
];
