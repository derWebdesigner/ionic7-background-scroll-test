import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform, IonItem, IonLabel, IonNote, IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { Message } from '../services/data.service';
import { ViewMessagePage } from '../view-message/view-message.page';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink, IonItem, IonLabel, IonNote, IonIcon],
})
export class MessageComponent {
  private platform = inject(Platform);
  @Input() message?: Message;
  isIos() {
    return this.platform.is('ios')
  }

  constructor(private modalCtrl: ModalController) {
    addIcons({ chevronForward });
  }

  onMessageClick() {
    this.modalCtrl.create({
      component: ViewMessagePage,
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8,
      mode: 'ios'
    })
    .then(modalEl => {
        modalEl.present();
    });
  }
}
