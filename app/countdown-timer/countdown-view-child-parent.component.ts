import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from "./countdown-timer.component";

@Component({
    selector: 'countdown-parent-vc',
    template: `
        <h3>Countdown to Liftoff (via ViewChild)</h3>
        <button (click)="start()">Start</button>
        <button (click)="stop()">Stop</button>
        <div class="seconds">{{seconds()}}</div>
        <countdown-timer></countdown-timer>
    `,
    styles: [`
        .seconds {
            background-color: black;
            color: red;
            font-size: 3em;
            margin: 0.3em 0;
            text-align: center;
            width: 1.5em;
        }

    `]
})
export class CountdownViewChildParentComponent implements AfterViewInit {
    @ViewChild(CountdownTimerComponent)
    public timerComponent: CountdownTimerComponent;

    seconds() {
        return 0;
    }

    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {
        this.timerComponent.start();
    }

    stop() {
        this.timerComponent.stop();
    }
}