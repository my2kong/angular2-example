import {Component} from '@angular/core';

///////// Using Absolute Paths ///////

@Component({
    selector: 'absolute-path',
    template: ``,
    //templateUrl: 'app/some/some.component.html',
    //styleUrls: ['app/some/some.component.css']
})
export class SomeAbsoluteComponent {
    class = 'absolute';
    type = 'Absolute template & style URLs';
    path = 'path.component.html';
}

///////// Using Relative Paths ///////

@Component({
    moduleId: module.id,
    selector: 'relative-path',
    templateUrl: 'some.component.html',
    styleUrls: ['some.component.css']
})
export class SomeRelativeComponent {
    class = 'relative';
    type = 'Component-relative template & style URLs';
    path = 'path.component.html';
}