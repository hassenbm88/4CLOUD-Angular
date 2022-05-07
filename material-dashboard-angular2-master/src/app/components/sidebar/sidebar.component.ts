import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Properties',  icon:'content_paste', class: '' },
    { path: '/visite', title: 'Visit',  icon:'library_books', class: '' },
    { path: '/agent', title: 'Agent',  icon:'bubble_chart', class: '' },
    { path: '/reglement', title: 'Reglements',  icon:'notifications', class: '' },
    { path: '/aide', title: 'Help',  icon:'bubble_chart', class: '' },
    { path: '/report', title: 'Report',  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
