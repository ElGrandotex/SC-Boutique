import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebarVisible = true;

  toggleSidebar() {
     this.sidebarVisible = !this.sidebarVisible;
  }
}
