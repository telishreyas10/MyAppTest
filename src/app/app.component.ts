import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Network } from '@awesome-cordova-plugins/network/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,private network: Network,public toastController: ToastController) {

    // if(!this.platform.is('mobileweb')){ 
      this.platform.ready().then(()=>{
        this.network.onDisconnect().subscribe(() => {
          console.log('network was disconnected :-(');
          this.presentToast('You went offline, check internet connection',false);
        });

        this.network.onConnect().subscribe(() => {
          console.log('network is connected :-(');
          this.presentToast('Network is back online',true);
        });

      });
    // }
  }

  async presentToast(msg,isConnected) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:isConnected ? 'success' : 'danger'
    });
    toast.present();
  }
}
