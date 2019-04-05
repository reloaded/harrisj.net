import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
export const routes: Routes = [
  {
    path: 'about',
    loadChildren: './routed/about/about.module#AboutModule',
    data: {
      page: 'about',
    }
  },
  {
    path: 'skills',
    loadChildren: './routed/skills/skills.module#SkillsModule',
    data: {
      page: 'skills',
    }
  },
  {
    path: 'timeline',
    loadChildren: './routed/timeline/timeline.module#TimelineModule',
    data: {
      page: 'timeline',
    }
  },
  {
    path: 'contact',
    loadChildren: './routed/contact/contact.module#ContactModule',
    data: {
      page: 'contact',
    }
  },
  {
    path: 'mentoring',
    loadChildren: './routed/mentor/mentor.module#MentorModule',
    data: {
      page: 'mentoring',
    }
  },
  {
    path: 'startup-opportunity',
    loadChildren: './routed/startup-opportunity/startup-opportunity.module#StartupOpportunityModule'
  },
  {
    path: 'service-unavailable',
    loadChildren: './routed/service-unavailable/service-unavailable.module#ServiceUnavailableModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './routed/home/home.module#HomeModule',
    data: {
      page: 'home',
    }
  },

  // <editor-fold desc="Catch-All Routes">

  {
    path: '**',
    loadChildren: './routed/not-found/not-found.module#NotFoundModule'
  }

  // </editor-fold>
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }

