import {Routes, RouterModule} from '@angular/router';

// Component
import {IntroComponent} from "./intro/intro.component";
import {HeroParentComponent} from "./hero-input/hero-parent.component";
import {NameParentComponent} from "./name-setter/name-parent.component";

export const ROUTES: Routes = [
    {path: '', component: IntroComponent},
    {path: 'hero-input', component: HeroParentComponent},
    {path: 'name-setter', component: NameParentComponent}
];
