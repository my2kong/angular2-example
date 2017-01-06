import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
    selector: 'hero-child',
    template: `
        <h3>{{hero.name}} Says:</h3>
        <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
    `
})
export class HeroChildComponent {
    @Input() hero: Hero;
    @Input('master') masterName: string;
}