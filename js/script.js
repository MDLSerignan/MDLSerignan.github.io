

userslist = [
  {
    usrname: "admin", pswd: "linux"
  },
  {
    usrname: "RobinGarcia", pswd: "1hD7lkP#"
  },
  {
    usrname: "LucieDumaire", pswd: "2hD7lkP#"
  },
  {
    usrname: "MatheoRicco", pswd: "3hD7lkP#"
  },
  {
    usrname: "JadeBaraMichardiere", pswd: "4hD7lkP#"
  },
];

function Memberlogin(){
  var username = document.getElementById("usernameid").value;
  var password = document.getElementById("passwordid").value;
  if (username == userslist[0].usrname){
    if (password == userslist[0].pswd){

    }
    else{
      document.getElementById("JSstatements").innerHTML = "Your password isn't correct"
    }
  }else {
    document.getElementById("JSstatements").innerHTML = "Your username isn't correct"
  }
  document.getElementById("JSstatements").innerHTML = "Hey! It's nice to see you again " + username + " !";
  var LoginBody = document.getElementById('login-div');
  LoginBody.style.width = '0';
  LoginBody.style.marginLeft = '-500px';
}
function MemberSignUp(){
  document.getElementById("JSstatements").innerHTML = "You're signed up !"
}
