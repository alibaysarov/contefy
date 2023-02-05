import * as mainFuncs from "./modules/functions.js";
mainFuncs.isWebp();

import { tabs } from "./modules/tabs.js";
import { packageSlider } from "./modules/packageSlider.js";
import { burger } from "./modules/burger.js";


tabs('.tabs__item');
window.addEventListener('resize',()=>{
  if(window.matchMedia('(max-width:1100px)').matches){
    packageSlider()
  }
})
if(window.matchMedia('(max-width:1100px)').matches){
  
  burger()
  
}


