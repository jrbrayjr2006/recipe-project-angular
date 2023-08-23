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
    console.info('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.info("ngOnInit called!");
  }

  ngDoCheck(): void {
    console.info('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.info('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.info('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.info('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.info('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.info('ngOnDestroy called!');
  }

}
