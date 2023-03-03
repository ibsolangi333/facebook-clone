import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MenuComponent } from './home/header/menu/menu.component';
import { CreateComponent } from './home/header/create/create.component';
import { MessengerComponent } from './home/header/messenger/messenger.component';
import { NotificationsComponent } from './home/header/notifications/notifications.component';
import { AccountComponent } from './home/header/account/account.component';
import { FriendsComponent } from './home/main-components/friends/friends.component';
import { WatchComponent } from './home/main-components/watch/watch.component';
import { MarketplaceComponent } from './home/main-components/marketplace/marketplace.component';
import { GroupsComponent } from './home/main-components/groups/groups.component';
import { DefaultHomeComponent } from './home/main-components/default-home/default-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    CreateComponent,
    MessengerComponent,
    NotificationsComponent,
    AccountComponent,
    FriendsComponent,
    WatchComponent,
    MarketplaceComponent,
    GroupsComponent,
    DefaultHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
