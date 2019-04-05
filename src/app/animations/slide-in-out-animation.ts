import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export interface SlideInOutAnimationConfig {
  slideInOutOrdinal: number;
}

function isAnimationConfig(config: SlideInOutAnimationConfig): boolean {
  return config && config.slideInOutOrdinal && typeof config.slideInOutOrdinal === 'number';
}

export function leftToRight(fromState: any, toState: any) {
  return isAnimationConfig(fromState) && isAnimationConfig(toState) ? fromState.slideInOutOrdinal > toState.slideInOutOrdinal : false;
}

export function rightToLeft(fromState: any, toState: any) {
  return isAnimationConfig(fromState) && isAnimationConfig(toState) ? fromState.slideInOutOrdinal < toState.slideInOutOrdinal : false;
}

// export function bottomToTop(fromState: string, toState: string) {
//   return toState === null || toState === undefined;
// }
//
// export function topToBottom(fromState: string, toState: string) {
//   return fromState < toState;
// }


export const slideInOutAnimation = trigger('slideInOutAnimation', [
    // transition(bottomToTop, [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: '100%',
    //       left: 0,
    //       width: '100%'
    //     })
    //   ], { optional: true }),
    //   query(':enter', [
    //     style({ top: '100%'})
    //   ], { optional: true }),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('600ms ease-out', style({ top: '-100%'}))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('600ms ease-out', style({ top: '0%'}))
    //     ], { optional: true })
    //   ]),
    //   query(':enter', animateChild(), { optional: true }),
    // ]),
    transition(leftToRight, [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        // style({ left: '-100%'})
        style({ transform: 'translateX(-100%)'})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          // animate('600ms ease-out', style({ left: '100%'}))
          animate('600ms ease-out', style({ transform: 'translateX(100%)'}))
        ], { optional: true }),
        query(':enter', [
          // animate('600ms ease-out', style({ left: '0%'}))
          animate('600ms ease-out', style({ transform: 'translateX(0%)'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    transition(rightToLeft, [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        // style({ left: '100%'})
        style({ transform: 'translateX(100%)'})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          // animate('600ms ease-out', style({ left: '-100%'}))
          animate('600ms ease-out', style({ transform: 'translateX(-100%)'}))
        ], { optional: true }),
        query(':enter', [
          // animate('600ms ease-out', style({ left: '0%'}))
          animate('600ms ease-out', style({ transform: 'translateX(0%)'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);
