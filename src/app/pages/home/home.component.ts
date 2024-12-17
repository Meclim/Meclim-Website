import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  navigateToExternal(): void {
    window.open('https://www.linkedin.com/company/meclimeng/jobs/', '_blank');
  }

}
