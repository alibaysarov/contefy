export function tabs(tabBtns) {
  const tabButtons=document.querySelectorAll(tabBtns);
  const removeActiveClasses=()=>{
    tabButtons.forEach(el=>{
      el.classList.remove('active')
    })
  }
  tabButtons.forEach((elem,arr)=>{
    elem.addEventListener('click',e=>{
      removeActiveClasses();
      e.target.classList.add('active');
    })
  })
}