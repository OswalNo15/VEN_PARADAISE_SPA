export const HideShowPassword = () => {
  const selectorActiveOculto = document.querySelector(".bx.bx-hide");
  const selectorActiveMostrado = document.querySelector(".bx.bx-show");
  const password = document.querySelector("#password");
  if (selectorActiveOculto != null) {
    if (password!=null){
        password.setAttribute("type","text");
    }
    selectorActiveOculto.classList.remove("bx-hide");
    selectorActiveOculto.classList.add("bx-show");
  } else if (selectorActiveMostrado != null) {
    selectorActiveMostrado.classList.remove("bx-show");
    selectorActiveMostrado.classList.add("bx-hide");
    if (password!=null){
        password.setAttribute("type","password");
    }
  }
};
