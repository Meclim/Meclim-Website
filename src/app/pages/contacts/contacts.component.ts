import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-contacts',
  imports: [FooterComponent, BreadcrumbComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  pageTitle: string = "Contato";
}
