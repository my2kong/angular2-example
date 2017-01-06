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
