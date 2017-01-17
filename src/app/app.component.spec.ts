/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  let el: HTMLElement;
  let de: DebugElement;
  beforeEach(() => {
    // TestBed.configureTestingModule:- Creating a TestBed creates an Angular Testing Module
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    // TestBed.createComponent:- Creates an instance of the component under Testing lens.
    // No more TestBed configuration after below line.
    fixture = TestBed.createComponent(AppComponent);
    // fixture(ComponentFixture):- An handle on the environment sorrounding above created component.
    // Provides access to the instance itself and to the DebugElement.
    // detechChanges:-
    comp = fixture.debugElement.componentInstance; // App Component Test Instance.
    el = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(comp.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(el.querySelector('h1').textContent).toContain('app works!');
    comp.title = 'Hello Ali';
    // detectChanges:- Each test tells Angular when to perform change detection by calling it.
    fixture.detectChanges();
    expect(el.querySelector('h1').textContent).toContain('Hello Ali');
  }));

  it('should have a Hello World heading in h2 tag', async(() => {
    // By:- Its a class in Angular utilities which has a lots of useful predicates.
    // query:- It takes a predicate function and search the fixture's
    // entire dom tree for the first element which satisfies the predicate.
    de = fixture.debugElement.query(By.css('h2'));
    expect(de.nativeElement.textContent).toContain('Hello World');
    // queryAll:- It takes a predicate function and search the fixture's
    // entire dom tree for all the elements which satisfies the predicate and returns an array.
    let deAll = fixture.debugElement.queryAll(By.css('h2'));
    expect(deAll.length).toEqual(1);
  }));
});
