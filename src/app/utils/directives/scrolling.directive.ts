import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

interface DOMRectI {
  bottom: number;
  height: number;
  left: number; // position start of element
  right: number; // position end of element
  top: number;
  width: number; // width of element
  x?: number;
  y?: number;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[scrollToCenter]',
})
export class MatTabScrollToCenterDirective implements OnDestroy {
  subs = new Subscription();
  constructor(
    private element: ElementRef
  ) {
    this.subs.add(
      fromEvent(this.element.nativeElement, 'click').subscribe((clickedContainer: MouseEvent) => {
        const scrollContainer = this.element.nativeElement.querySelector('.mat-tab-list');
        const currentScrolledContainerPosition: number = scrollContainer.scrollLeft;
        // const newPositionScrollTo = this.calcScrollValue(clickedContainer, currentScrolledContainerPosition);
        const newPositionScrollTo = this.calcScrollToCenterValue(clickedContainer, currentScrolledContainerPosition);

        scrollContainer.scroll({
          left: newPositionScrollTo,
          behavior: 'smooth',
        });
      })
    );
  }

  calcScrollToCenterValue(clickedContainer, currentScrolledContainerPosition): number {
    const scrolledButton: DOMRectI = (clickedContainer.target as HTMLElement).getBoundingClientRect();
    const leftXOffset = (window.innerWidth - scrolledButton.width) / 2;
    const currentVisibleViewportLeft = scrolledButton.left;
    const neededLeftOffset = currentVisibleViewportLeft - leftXOffset;
    console.log(scrolledButton);
    const newValueToSCroll = currentScrolledContainerPosition + neededLeftOffset;
    return newValueToSCroll;
  }

  /**
   * calculate scroll to left in + or - values due to clicked half of viewport - left or right
   */
  // calcScrollValue(clickedContainer: MouseEvent, currentScrolledContainerPosition: number): number {
  //   const halfOfViewport: number = window.innerWidth / 2;
  //   const clickedXposition: number = clickedContainer.clientX;
  //   const isLeftSideClicked: boolean = clickedXposition < halfOfViewport;
  //   const scrolledButtonWidth: number = (clickedContainer.target as HTMLElement).clientWidth;
  //   const newScrolledPosition = isLeftSideClicked
  //     ? currentScrolledContainerPosition - scrolledButtonWidth
  //     : currentScrolledContainerPosition + scrolledButtonWidth;
  //   return newScrolledPosition;
  // }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
