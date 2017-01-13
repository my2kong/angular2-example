import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <nav>
            <span>
                <a [routerLink]=" ['./hero-input'] ">hero-child</a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./name-setter'] ">name-setter</a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./version-change'] ">version-change</a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./voter-event'] ">voter-event</a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./countdown-timer-local'] ">countdown-timer-local</a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./countdown-timer-viewchild'] ">countdown-timer-viewchild</a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./mission-control'] ">mission-control</a>
            </span>
        </nav>
        
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [`
        nav {
          margin-bottom: 10px;
        }
    `]
})
export class AppComponent {
    name = 'Angular';
}
