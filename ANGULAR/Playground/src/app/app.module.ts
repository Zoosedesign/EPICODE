import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'active-posts',
        component: ActivePostsComponent,
    },
    {
        path: 'inactive-posts',
        component: InactivePostsComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        PostCardComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
