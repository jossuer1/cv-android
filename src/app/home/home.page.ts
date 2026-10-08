import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonAvatar, 
  IonButton, 
  IonIcon, 
  IonChip, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  personOutline, 
  codeSlashOutline, 
  briefcaseOutline, 
  schoolOutline, 
  mailOutline, 
  logoGithub, 
  logoLinkedin 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonAvatar, 
    IonButton, 
    IonIcon, 
    IonChip, 
    IonList, 
    IonItem, 
    IonLabel
  ],
})
export class HomePage {
  constructor() {
    // Registro de los iconos que se usan en el HTML
    addIcons({
      personOutline,
      codeSlashOutline,
      briefcaseOutline,
      schoolOutline,
      mailOutline,
      logoGithub,
      logoLinkedin
    });
  }
}