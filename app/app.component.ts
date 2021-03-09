import { Component, OnInit } from "@angular/core";
 class UserModel{
    useremail:string="";
    userconfirmemail:string;
    password:string ;
  }
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // xyz: string = "";
  // abc: string = "html";
  // name: string = "pandu";
  // mystyle: string = "blue";
  // ngOnInit() {}
  // onClick1() {
  //   this.xyz1 = "Anglar11";
  // }

  // Group = {
  //   color: "gold",
  //   fontSize: "30px",
  //   fontWeight: "italic"
  // };

  vinay: boolean = true;
  //property binding
  ppt: string = "enter name";
  //class binding
  abc1: string = "textsize";
  public required1 = true;
  //sTYLE binding
  public mycolor = "pink";
  public required = false;

  public mystyles = {
    color: "skyblue",
    fontStyle: "italic",
    fontWeight: "bold"
  };

  //Interpolation
  public xyz = "this is Interpolation";
  //TWO WAY DATA binding
  public data = "";
  // event binding
  public name1 = "";

  //event binding
  onClick() {
    alert("this is alert");
    console.log("this is console");
    this.name1 = "this is local varaiable";
    console.log(this.data);
  }
  // toggleMe(){
  //  this.vinay = !this.vinay;
  // }
  title = "questionbank";
  UserData: UserModel[] = [];
  UserItem: UserModel = new UserModel();
  OnCopy(data: any) {
    alert(data);
    //    this.userconfirmemail=this.useremail;
  }

  OnEmailCheck(email: string, confirmemail: string) {
    if (email == confirmemail) {
      alert("email are matched");
    } else {
      alert("email are not matched");
    }
  }
  OnAdd() {
    this.UserItem = new UserModel();
    this.UserData.push(this.UserItem);
  }
}
