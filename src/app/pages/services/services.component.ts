import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-services',
  imports: [FooterComponent, BreadcrumbComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  pageTitle: string = "Serviços";

}
