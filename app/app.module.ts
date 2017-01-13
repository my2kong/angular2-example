import {NgModule}      from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent}  from './app.component';
import {ROUTES} from "./app.routes";
import {HeroInputModule} from "./hero-input/hero-input.module";
import {IntroComponent} from "./intro/intro.component";
import {NameSetterModule} from "./name-setter/name-setter.module";
import {VersionChangeModule} from "./version-change/version-change.module";
import {VoterEventModule} from "./voter-event/voter-event.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HeroInputModule,
        NameSetterModule,
        VersionChangeModule,
        VoterEventModule,
        RouterModule.forRoot(ROUTES, {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        })
    ],
    declarations: [
        AppComponent,
        IntroComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
