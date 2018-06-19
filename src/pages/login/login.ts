import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import ArrTester from '../../app/EmpArray';
import {SignUpPage} from '../sign-up/sign-up'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  SignUp(){
    this.navCtrl.push(SignUpPage);
  }
 
login = function (username:string, password:number){
  if (username == this.EmpArray && password == this.EmpArray){
    this.navCtrl.push(HomePage);
  }
  else {
    alert("incorrect login details")
  }
}
  
}
