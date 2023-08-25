import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  title = 'recipe-project';

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.debug("ngOnInit called!");
  }

  ngDoCheck(): void {
    console.debug('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.debug('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.debug('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.debug('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.debug('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy called!');
  }

}
