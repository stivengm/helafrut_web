import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'elafrut';

  isOpenMenu = false;

  ngOnInit() {
    if (window.innerWidth > 768) {
      this.isOpenMenu = true  
    }
  }

  openActions() {

    if (window.innerWidth > 768) {
      this.isOpenMenu = true;
    } else {
      this.isOpenMenu = !this.isOpenMenu
    }

  }
}
