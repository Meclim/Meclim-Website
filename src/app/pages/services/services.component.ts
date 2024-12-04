import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-services',
  imports: [HeaderComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  pageTitle: string = "Serviços";

}
