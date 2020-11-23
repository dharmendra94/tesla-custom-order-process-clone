import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../models/nav-item';

@Component({
  selector: 'top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent implements OnInit {
  navTabs: NavItem[] = [
    { label: '1.Car', route: './car' },
    { label: '2.Exterior', route: './exterior' },
    { label: '3.Interior', route: './interior' },
    { label: '4.Autopilot', route: './autopilot' },
    { label: '5.Payment', route: './payment' },
  ];
  activeTab = this.navTabs[0];

  constructor(private router: Router) {
  }

  ngOnInit(): void {}

  onTabClick(tab: NavItem): void {
    this.activeTab = tab;
  }
}
