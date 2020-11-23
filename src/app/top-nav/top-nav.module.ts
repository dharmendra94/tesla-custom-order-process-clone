import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopNavBarComponent],
  imports: [CommonModule, MatTabsModule, MatButtonModule, RouterModule],
  exports: [TopNavBarComponent]
})
export class TopNavModule {}
