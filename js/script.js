

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

function OpenLoginForm(){
  var LoginBody = document.getElementById('login-div');
  var body = document.getElementById("login-divform");

  LoginBody.style.width = '100%';
  LoginBody.style.marginLeft = '0';

  const loginformtext = document.createElement("div");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const space1 = document.createElement("br");
  const space2 = document.createElement("br");
  const subbtn = document.createElement("button");

  loginformtext.setAttribute("class", "loginformtext");
  label1.setAttribute("for", "usernameid");
  input1.setAttribute("type", "text");
  input1.setAttribute("name", "usrnme");
  input1.setAttribute("id", "usernameid");
  label2.setAttribute("for", "passwordid");
  input2.setAttribute("type", "password");
  input2.setAttribute("name", "password");
  input2.setAttribute("id", "passwordid");
  subbtn.setAttribute("class", "btn sbmbtn");
  subbtn.setAttribute("onclick", "Memberlogin()");

  label1.textContent = "Username :"
  label2.textContent = "Password :"
  subbtn.textContent = "Se connecter"

  body.appendChild(loginformtext)
  loginformtext.appendChild(label1)
  loginformtext.appendChild(input1)
  loginformtext.appendChild(space1)
  loginformtext.appendChild(label2)
  loginformtext.appendChild(input2)
  loginformtext.appendChild(space2)
  loginformtext.appendChild(subbtn)
}
function OpenSignUpForm(){
  var LoginBody = document.getElementById('login-div');
  var body = document.getElementById("login-divform");

  LoginBody.style.width = '100%';
  LoginBody.style.marginLeft = '0';

  const InfoMsg = document.createElement("div");
  const Devmaillink = "";
  const Assomaillink = "";
  const closetxt = document.createElement("a");
  const space1 = document.createElement("br");
  const space2 = document.createElement("br");

  closetxt.setAttribute("href", "#");
  closetxt.setAttribute("onclick", "var LoginBody = document.getElementById('login-div');LoginBody.style.width = '0';LoginBody.style.marginLeft = '-500px';")
  closetxt.setAttribute("style", "text-align: right;color:#ffffff;text-decoration:none")

  Assomaillink.innerHTML = "mdl.serignan@gmail.com"
  InfoMsg.innerHTML = "<div style='font-size: 25px'>Oh Non !</div> Tu n'as pas accès au contenu des Membres ?<br> Il va falloir que tu adhères !<br> Si tu as déjà adhéré, contact les personnes qui s'occupe du site à: " + "<a href='mailto:webdesign.alexpro@gmail.com' style='color: #ffffff;font-size: 20px'>webdesign.alexpro@gmail.com</a>" + " pour contacter le développeur, <br>et à: " + "<a href='mailto:mdl.serignan@gmail.com' style='color: #ffffff;font-size: 20px'>mdl.serignan@gmail.com</a>" + " pour contacter l'association"
  closetxt.textContent = "Fermer la fenêtre"

  body.appendChild(InfoMsg);
  InfoMsg.appendChild(space1);
  InfoMsg.appendChild(space2)
  InfoMsg.appendChild(closetxt);
}


function Memberlogin(){
  var LoginBody = document.getElementById('login-div');
  var username = document.getElementById("usernameid").value;
  var password = document.getElementById("passwordid").value;
  if (username == userslist[0].usrname){
    if (password == userslist[0].pswd){
      LoginBody.style.width = '0';
      LoginBody.style.marginLeft = '-500px';
      CreateMemberSpace(username)
    }
    else{
      document.getElementById("JSstatements").innerHTML = "Your password isn't correct"
    }
  }else {
    document.getElementById("JSstatements").innerHTML = "Your username isn't correct"
  }
}

function CreateMemberSpace(username){
  const body = document.getElementById("memberbody");
  const mybody = document.createElement("div");
  const memberzone = document.createElement("div");
  const himember = document.createElement("p");
  const memberTODO = document.createElement("div");
  const member = username;

  var TODO1 = "Travailler sur, comment peut-on arriver à faire adhérer les élèves du lycée ?";
  var TODO2 = "Rien pour l'instant"

  memberzone.setAttribute("class", "memberzoneclass");
  himember.setAttribute("class", "himembermsg");

  body.appendChild(mybody);
  mybody.appendChild(memberzone);
  memberzone.appendChild(himember)
  memberzone.appendChild(memberTODO);

  himember.innerHTML = "Hey! It's nice to see you again " + member + " !<br><br>";
  himember.insertAdjacentText("beforeend", "Ce que tu peux faire:");
  memberTODO.innerHTML = "<br>1ère demande: " + TODO1 + "<br>"
  memberTODO.insertAdjacentText("beforeend", "2ème demande: " + TODO2)
}