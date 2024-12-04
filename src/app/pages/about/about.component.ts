import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  pageTitle: string = "Empresa";
}
