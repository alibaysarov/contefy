export const burger=()=>{
  const burgerBtn=document.querySelector('.burger')
  const menu=document.querySelector('.sidebar')
  const overlay=document.querySelector('.overlay')
  
  const burgerLines=[...burgerBtn.querySelectorAll('div')]
  burgerBtn.addEventListener('click',()=>{
    burgerBtn.classList.add('active')
    menu.classList.add('active')
    overlay.classList.add('active')
    
    
  })
  
  overlay.addEventListener('click',(e)=>{
    
    
      burgerBtn.classList.remove('active')
    menu.classList.remove('active')
    overlay.classList.remove('active')
  })
  
}