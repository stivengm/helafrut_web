import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent {

  openWhatsApp() {
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=573052003802&text=Hola%20Elafrut%2C%20quiero%20tener%20m%C3%A1s%20informaci%C3%B3n.";
    window.open(linkWhatsApp, "_blank");
  }

}
