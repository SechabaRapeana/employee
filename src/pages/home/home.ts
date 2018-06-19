import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  EmployeeArray = [];
  EmpID = '';
  Name = '';
  Surname = '';
  Role = '';

  add1(event){
    this.EmpID=event.target.value;
   
    }

    add2(event){
      this.Name=event.target.value;
     
      }

      add3(event){
        this.Surname=event.target.value;
       
        }
        add4(event){
          this.Role=event.target.value;
         
          }


  PushMethod(EmpID, Name, Surname, Role){
    
    this.EmployeeArray.push(this.EmpID, this.Name ,this.Surname, this.Role) ;
  
    console.log( this.EmployeeArray);
    
    if (this.EmpID != '' &&  this.Name != '' && this.Surname != '' && this.Role != '' ){
  this.EmployeeArray.splice(0, 1)
  }else{
  alert('Empty')
  }
  }
  
  getIndex(a){
  this.EmployeeArray.splice(a, 1)
  }
  
  UpdateInd(a){
  this.EmployeeArray[a] = (this.EmpID  + " "+  this.Name  + " "+ this.Surname + " " + this.Role )
  this.EmployeeArray.push(this.EmpID  + " "+  this.Name  + " "+ this.Surname + " " + this.Role)
  
  }

}


















































//PushMethod(){
//   if (this.empID != '' && this.name != '' this.surname != '' && this.role != '' )  {
//   this.arrTodoList.push(this.item  + " "+ this.time)}
//    else { 
//     alert('Enter text')};
//   }
  
  
  
  
//   remove(a){
  
   
//     if (this.empID != '' && this.name != '' this.surname != '' && this.role != ''){
//       this.EmployeeArray.splice(0, 1)
//     }else{
//       alert('Empty')
//     }
//   }
  
//   .getIndex(a){
//     this.EmployeeArray.splice(a, 1)
//   }
  
//   UpdateInd(a){
//     this.EmployeeArray[a] = (this.empID  + " "+ this.name + " "+ this.surname  + " "+ this.role)
//  \
   
//   }
