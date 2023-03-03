import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
// ======================  
  // section 1 start
  serachIconMargin="0"
  searchBarDisplay=false
  SearchBoxWidth=""
  openSearchBar(){
    this.serachIconMargin="-25px"
    this.searchBarDisplay=true
    this.SearchBoxWidth="230px"
    this.displayAccountBar=false 
    this.displayMenuBar=false;
    this.displayCreateBar=false
    this.displayMessengerBar=false
    this.displayNotficationsBar=false
  }
  hideSearchBar(){
    this.searchBarDisplay=false
    this.serachIconMargin="0"
    this.SearchBoxWidth=""
  }
  // section 1 end
  // ======================
  // ======================
  // section 2 start
  homeBottomLineDisplay="block";
  friendsBottomLineDisplay="none";
  watchBottomLineDisplay="none";
  marketplaceBottomLineDisplay="none";
  groupsBottomLineDisplay="none";
  
  homeLinkBgHover=false;
  FriendsLinkBgHover=true;
  watchLinkBgHover=true;
  marketplaceLinkBgHover=true;
  groupsLinkBgHover=true

  homeIconColor="#1b74e4";
  friendsIconColor="#41454bd6";
  watchIconColor="#41454bd6";
  marketplaceIconColor="#41454bd6";
  groupsIconColor="#41454bd6";

  homeFuc(){
    this.homeBottomLineDisplay="block";
    this.friendsBottomLineDisplay="none";
    this.watchBottomLineDisplay="none";
    this.marketplaceBottomLineDisplay="none";
    this.groupsBottomLineDisplay="none";
    this.homeLinkBgHover=false;
    this.FriendsLinkBgHover=true;
    this.watchLinkBgHover=true;
    this.marketplaceLinkBgHover=true;
    this.groupsLinkBgHover=true
    this.homeIconColor="#1b74e4";
    this.friendsIconColor="#41454bd6";
    this.watchIconColor="#41454bd6";
    this.marketplaceIconColor="#41454bd6";
    this.groupsIconColor="#41454bd6"; 
  };
  friendsFuc(){
    this.homeBottomLineDisplay="none";
    this.friendsBottomLineDisplay="block";
    this.watchBottomLineDisplay="none";
    this.marketplaceBottomLineDisplay="none";
    this.groupsBottomLineDisplay="none";
    this.homeLinkBgHover=true;
    this.FriendsLinkBgHover=false;
    this.watchLinkBgHover=true;
    this.marketplaceLinkBgHover=true;
    this.groupsLinkBgHover=true;
    this.homeIconColor="#41454bd6";
    this.friendsIconColor="#1b74e4";
    this.watchIconColor="#41454bd6";
    this.marketplaceIconColor="#41454bd6";
    this.groupsIconColor="#41454bd6";
  };
  watchFun(){
    this.homeBottomLineDisplay="none";
    this.friendsBottomLineDisplay="none";
    this.watchBottomLineDisplay="block";
    this.marketplaceBottomLineDisplay="none";
    this.groupsBottomLineDisplay="none";
    this.homeLinkBgHover=true;
    this.FriendsLinkBgHover=true;
    this.watchLinkBgHover=false;
    this.marketplaceLinkBgHover=true;
    this.groupsLinkBgHover=true
    this.homeIconColor="#41454bd6";
    this.friendsIconColor="#41454bd6";
    this.watchIconColor="#1b74e4";
    this.marketplaceIconColor="#41454bd6";
    this.groupsIconColor="#41454bd6";
  };
  marketplaceFun(){
    this.homeBottomLineDisplay="none";
    this.friendsBottomLineDisplay="none";
    this.watchBottomLineDisplay="none";
    this.marketplaceBottomLineDisplay="block";
    this.groupsBottomLineDisplay="none";
    this.homeLinkBgHover=true;
    this.FriendsLinkBgHover=true;
    this.watchLinkBgHover=true;
    this.marketplaceLinkBgHover=false;
    this.groupsLinkBgHover=true
    this.homeIconColor="#41454bd6";
    this.friendsIconColor="#41454bd6";
    this.watchIconColor="#41454bd6";
    this.marketplaceIconColor="#1b74e4";
    this.groupsIconColor="#41454bd6";
  };
  groupsFuc(){
    this.homeBottomLineDisplay="none";
    this.friendsBottomLineDisplay="none";
    this.watchBottomLineDisplay="none";
    this.marketplaceBottomLineDisplay="none";
    this.groupsBottomLineDisplay="block";
    this.homeLinkBgHover=true;
    this.FriendsLinkBgHover=true;
    this.watchLinkBgHover=true;
    this.marketplaceLinkBgHover=true;
    this.groupsLinkBgHover=false
    this.homeIconColor="#41454bd6";
    this.friendsIconColor="#41454bd6";
    this.watchIconColor="#41454bd6";
    this.marketplaceIconColor="#41454bd6";
    this.groupsIconColor="#1b74e4";
  };
  // section 2 end 
// ======================
// ======================
  // section 3 start
  menuChangeBackground="rgba(165, 165, 170, 0.407)";
  messengerChangeBackground="rgba(165, 165, 170, 0.407)"
  notificationChangeBackground="rgba(165, 165, 170, 0.407)"
  createChangeBackground="rgba(165, 165, 170, 0.407)"
  
  displayMenuBar=false;
  displayCreateBar=false
  displayMessengerBar=false
  displayNotficationsBar=false
  displayAccountBar=false

  menuFun(){
    this.displayMenuBar =! this.displayMenuBar
    this.displayCreateBar=false
    this.displayMessengerBar=false
    this.displayNotficationsBar=false
    this.displayAccountBar=false
    
    if(this.menuChangeBackground == "rgba(165, 165, 170, 0.407)"){
      this.menuChangeBackground="#1b75e435"
      this.messengerChangeBackground="rgba(165, 165, 170, 0.407)"
      this.notificationChangeBackground="rgba(165, 165, 170, 0.407)"
      this.createChangeBackground="rgba(165, 165, 170, 0.407)"
    }
    else{
      this.menuChangeBackground="rgba(165, 165, 170, 0.407)";
    }
    this.searchBarDisplay=false
  }
  createFun(){
    this.displayCreateBar =! this.displayCreateBar
    this.displayMenuBar=false;
    this.displayMessengerBar=false
    this.displayNotficationsBar=false
    this.displayAccountBar=false
    if(this.createChangeBackground == "rgba(165, 165, 170, 0.407)"){
      this.menuChangeBackground="rgba(165, 165, 170, 0.407)"
      this.messengerChangeBackground="rgba(165, 165, 170, 0.407)"
      this.notificationChangeBackground="rgba(165, 165, 170, 0.407)"
      this.createChangeBackground="#1b75e435"
    }
    else{
      this.createChangeBackground="rgba(165, 165, 170, 0.407)"
    }
    this.searchBarDisplay=false
  }
  messengerFun(){
    this.displayMessengerBar =! this.displayMessengerBar
    this.displayMenuBar=false;
    this.displayCreateBar=false
    this.displayNotficationsBar=false
    this.displayAccountBar=false

    if(this.messengerChangeBackground == "rgba(165, 165, 170, 0.407)"){
      this.menuChangeBackground="rgba(165, 165, 170, 0.407)"
      this.messengerChangeBackground="#1b75e435"
      this.notificationChangeBackground="rgba(165, 165, 170, 0.407)"
      this.createChangeBackground="rgba(165, 165, 170, 0.407)"

    }
    else{
      this.messengerChangeBackground="rgba(165, 165, 170, 0.407)";
    }
    this.searchBarDisplay=false
  }
  notificationFun(){
    this.displayNotficationsBar =! this.displayNotficationsBar
    this.displayMenuBar=false;
    this.displayCreateBar=false
    this.displayMessengerBar=false
    this.displayAccountBar=false

    if(this.notificationChangeBackground == "rgba(165, 165, 170, 0.407)"){
      this.menuChangeBackground="rgba(165, 165, 170, 0.407)"
      this.messengerChangeBackground="rgba(165, 165, 170, 0.407)"
      this.notificationChangeBackground="#1b75e435"
      this.createChangeBackground="rgba(165, 165, 170, 0.407)"
    }
    else{
      this.notificationChangeBackground="rgba(165, 165, 170, 0.407)"
    }
    this.searchBarDisplay=false
  }
  accountFun(){
    this.displayAccountBar =! this.displayAccountBar 
    this.displayMenuBar=false;
    this.displayCreateBar=false
    this.displayMessengerBar=false
    this.displayNotficationsBar=false

    this.menuChangeBackground="rgba(165, 165, 170, 0.407)";
    this.messengerChangeBackground="rgba(165, 165, 170, 0.407)"
    this.notificationChangeBackground="rgba(165, 165, 170, 0.407)"
    this.createChangeBackground="rgba(165, 165, 170, 0.407)"

    this.searchBarDisplay=false
  }
  // section 3 end
// ======================

}
