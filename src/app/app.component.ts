import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {PageService} from './services/page-service/page.service';
import {Meta, Title} from '@angular/platform-browser';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet
} from '@angular/router';
import {filter} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {slideInOutAnimation} from './animations/slide-in-out-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInOutAnimation,
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  navItems: {
    routerLink: string[];
    linkText: string;
  }[] = [
    {
      linkText: 'Mentoring',
      routerLink: ['mentoring']
    },
    {
      linkText: 'Skills',
      routerLink: ['skills']
    },
    {
      linkText: 'Timeline',
      routerLink: ['timeline']
    },
    {
      linkText: 'About',
      routerLink: ['about']
    },
    {
      linkText: 'Say Hello',
      routerLink: ['contact']
    },
  ];
  navDrawerOpened = false;
  mobileNavigation = true;
  isRouteLoading: boolean;
  coldStartFinished: boolean;
  activeBackgroundTasks: BehaviorSubject<boolean>;
  private navEnd: Observable<NavigationEnd>;
  private navCancelled: Observable<NavigationCancel>;
  private navError: Observable<NavigationError>;
  private routeConfigLoadEnd: Observable<RouteConfigLoadEnd>;
  private routeConfigLoadStart: Observable<RouteConfigLoadStart>;

  constructor(
    private title: Title,
    private pageService: PageService,
    private changeDetectorRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    router: Router
  ) {
    this.activeBackgroundTasks = this.pageService.activeBackgroundTasks;

    this.navCancelled = router.events.pipe(
      filter(evt => evt instanceof NavigationCancel)
    ) as Observable<NavigationCancel>;

    this.navEnd = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;

    this.navError = router.events.pipe(
      filter(evt => evt instanceof NavigationError)
    ) as Observable<NavigationError>;

    this.routeConfigLoadStart = router.events.pipe(
      filter(evt => evt instanceof RouteConfigLoadStart)
    ) as Observable<RouteConfigLoadStart>;

    this.routeConfigLoadEnd = router.events.pipe(
      filter(evt => evt instanceof RouteConfigLoadEnd)
    ) as Observable<RouteConfigLoadEnd>;
  }

  ngOnInit(): void {
    this.coldStartFinished = true;
    this.isRouteLoading = true;

    this.pageService.title.subscribe(title => {
      const prefix = 'Full Stack Developer Portfolio | .NET, Domain Driven Design Specialist';
      if (!title) {
        this.title.setTitle(prefix);
      } else {
        this.title.setTitle(`${title} | ${prefix}`);
      }
    });

    const layoutChanges = this.breakpointObserver.observe([
      '(min-width: 576px)'
    ]);

    layoutChanges.subscribe((event) => {
      // Disable mobile navigation drawer if the screen is >= medium
      if (event.matches) {
        this.disableMobileNavigation();
      } else {
        this.enableMobileNavigation();
      }
    });

    this.navEnd.subscribe(() => {
      this.closeMobileNavigation();
      this.pageService.scrollTop();
    });
    this.navCancelled.subscribe(() => this.closeMobileNavigation());
    this.navError.subscribe(() => this.closeMobileNavigation());
    this.routeConfigLoadStart.subscribe(() => this.loadingRoute());
    this.routeConfigLoadEnd.subscribe(() => this.routeLoaded());
  }

  ngOnDestroy(): void {
  }

  toggleNavDrawer(): void {
    this.navDrawerOpened = !this.navDrawerOpened;
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet && outlet.activatedRouteData && outlet.activatedRouteData['slideInOutAnimation']) {
      return outlet.activatedRouteData['slideInOutAnimation'];
    }
    return null;
  }

  private enableMobileNavigation(): void {
    this.mobileNavigation = true;
  }

  private disableMobileNavigation(): void {
    this.closeMobileNavigation();
    this.mobileNavigation = false;
  }

  private closeMobileNavigation(): void {
    this.navDrawerOpened = false;
  }

  private loadingRoute(): void {
    this.isRouteLoading = true;
  }

  private routeLoaded(): void {
    this.isRouteLoading = false;
  }
}
