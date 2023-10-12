console.log("I am working!");


const author = "Adarsh Maurya!";

console.log(`Developer ${author}`);






  let menuBtnCond = true;
  let checkLabel = document.getElementById("check-label");
  
  const menuBtnChanger = function(){
  
      if (menuBtnCond){
          checkLabel.innerHTML = `<i class='bx bx-x'></i>`;
          menuBtnCond = false;
      }
  
      else{
          checkLabel.innerHTML = `<i class='bx bx-menu'></i>`;
  
          menuBtnCond = true;
      }
  
  }
  
  let menuBtn = document.getElementById("check");
  menuBtn.addEventListener("click", menuBtnChanger);