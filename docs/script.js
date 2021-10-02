
let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');
let table4 = document.getElementById('table4');
let table5 = document.getElementById('table5');
let table6 = document.getElementById('table6');
let table7 = document.getElementById('table7');
let beginD = new Date(2021, 04, 01); 
let beginDi = new Date(2021, 04, 31); 
let beginDl = new Date(2021, 05, 30); 
let beginDA = new Date(2021, 06, 31);
let beginDS = new Date(2021, 07, 31);
let beginDO = new Date(2021, 08, 30);
let beginDN = new Date(2021, 09, 31);

//Запоняем таблицу цыфрами
//Май
for (let i = 0; i < 31; i++) {
if (i < 2) {
 table1.rows[1].cells[i+5].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + i));
 DayColorsss (table1, 1, 4);
} else if ( i >= 2 && i <= 8) {
 table1.rows[2].cells[i-2].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColorsss (table1, 2, 4);
} else if ( i >= 9 && i <= 15) {
 table1.rows[3].cells[i-9].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColorsss (table1, 3, 4);
} else if (i >= 16 && i <= 22) {
 table1.rows[4].cells[i-16].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColorsss (table1, 4, 4);
} else if (i >= 23 && i <= 29) {
 table1.rows[5].cells[i-23].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColorsss (table1, 5, 4);
} else if (i >= 30 && i < 31) {
 table1.rows[6].cells[i-30].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColorsss (table1, 6, 4);
} 
}

//Июнь
for (let i = 0; i < 31; i++) {
   if (i < 6) {
    table2.rows[1].cells[i+1].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 1, 5);
   } else if ( i >= 7 && i <= 13) {
    table2.rows[2].cells[i-7].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 2, 5);
   } else if ( i >= 14 && i <= 20) {
    table2.rows[3].cells[i-14].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 3, 5);
   } else if (i >= 21 && i <= 27) {
    table2.rows[4].cells[i-21].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 4, 5);
   } else if (i >= 28 && i <= 31) {
    table2.rows[5].cells[i-28].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 5, 5);
   } else if (i >= 30 && i < 31) {
    table2.rows[6].cells[i-30].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 6, 5);
   } 
   }

//Июль
for (let i = 0; i < 32; i++) {
      let textCon = beginDl.getDate(beginDl.setDate(beginDl.getDate() + 1));
      if (i < 4) {
       table3.rows[1].cells[i+3].innerHTML = textCon;
       DayColors (table3, 1, 6);
      } else if ( i >= 4 && i <= 10) {
       table3.rows[2].cells[i-4].innerHTML = textCon;
       DayColors (table3, 2, 6);
      } else if ( i >= 11 && i <= 17) {
       table3.rows[3].cells[i-11].innerHTML = textCon;
       DayColors (table3, 3, 6);
      } else if (i >= 18 && i <= 24) {
       table3.rows[4].cells[i-18].innerHTML = textCon;
       DayColors (table3, 4, 6);
      } else if (i >= 25 && i <=30) {
       table3.rows[5].cells[i-25].innerHTML = textCon;
       DayColors (table3, 5, 6);
      } 
      }

  //Август    
 for (let i = 0; i < 31; i++) {
    let textCon = beginDA.getDate(beginDA.setDate(beginDA.getDate()+1));
     if (i < 1) {
      table4.rows[1].cells[i+6].innerHTML = textCon;
      DayColorsss (table4, 1, 7);
     } else if ( i >=1 && i <= 7) {
     table4.rows[2].cells[i-1].innerHTML = textCon;
      DayColorsss (table4, 2, 7);
     } else if ( i >= 8 && i <= 14) {
      table4.rows[3].cells[i-8].innerHTML = textCon;
    DayColorsss (table4, 3, 7);
     } else if (i >= 15 && i <= 21) {
     table4.rows[4].cells[i-15].innerHTML = textCon;
      DayColorsss (table4, 4, 7);
     } else if (i >= 22 && i <= 28) {
      table4.rows[5].cells[i-22].innerHTML = textCon;
    DayColorsss (table4, 5 ,7);
     } else if (i == 29) {
      table4.rows[6].cells[0].innerHTML = textCon;
      DayColorsss (table4, 6, 7);
     } else if (i == 30) {
      table4.rows[6].cells[1].innerHTML = textCon;
      DayColorsss (table4, 6 ,7);
     } 
   }
   //Сентябрь   
 for (let i = 0; i < 33; i++) {
    let textCon = beginDS.getDate(beginDS.setDate(beginDS.getDate()+1));
     if (i < 5) {
      table5.rows[1].cells[i+2].innerHTML = textCon;
      DayColor (table5, 1, 8);
    } else if ( i >= 6 && i <= 12) {
      table5.rows[2].cells[i-6].innerHTML = textCon -1;
      DayColor (table5, 2, 8);
     } else if ( i >= 13 && i <= 19) {
      table5.rows[3].cells[i-13].innerHTML = textCon - 1;
      DayColor (table5, 3, 8);
     } else if (i >= 20 && i <= 26) {
      table5.rows[4].cells[i-20].innerHTML = textCon - 1;
      DayColor (table5, 4, 8);
     } else if (i >= 27 && i <= 30) {
      table5.rows[5].cells[i-27].innerHTML = textCon - 1;
      DayColor (table5, 5, 8);
     } else if (i == 31) {
      table5.rows[5].cells[i-29].innerHTML = 29;
      DayColor (table5, 5, 8);
     }  else if (i == 32) {
      table5.rows[5].cells[i-29].innerHTML = 30;
      DayColor (table5, 5, 8);
     } 
     }
     //Октябрь
 for (let i = 0; i < 31; i++) {
   let textCon = beginDO.getDate(beginDO.setDate(beginDO.getDate()+1));
   if (i < 3) {
     table6.rows[1].cells[i+4].innerHTML = textCon;
      DayColors (table6, 1, 9);
     } else if ( i >= 3 && i <= 9) {
      table6.rows[2].cells[i-3].innerHTML = textCon;
      DayColors (table6, 2, 9);
     } else if ( i >= 10 && i <= 16) {
     table6.rows[3].cells[i-10].innerHTML = textCon;
     DayColors (table6, 3, 9);
     } else if (i >= 17 && i <= 23) {
      table6.rows[4].cells[i-17].innerHTML = textCon;
      DayColors (table6, 4 ,9);
     } else if (i >= 24 && i <=31) {
      table6.rows[5].cells[i-24].innerHTML = textCon;
     DayColors (table6, 5, 9);
    } 
    }
    //Ноябрь
    for (let i = 0; i < 30; i++) {
      let textCon = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
      if (i < 7) {
      table7.rows[1].cells[i].innerHTML = textCon;
       DayColorsss (table7, 1, 10);
      } else if ( i >= 7 && i <= 13) {
       table7.rows[2].cells[i-7].innerHTML = textCon;
     DayColorsss (table7, 2, 10);
      } else if (i >= 14 && i <= 20) {
      table7.rows[3].cells[i-14].innerHTML = textCon;
       DayColorsss (table7, 3, 10);
      } else if (i >= 21 && i <= 27) {
       table7.rows[4].cells[i-21].innerHTML = textCon;
     DayColorsss (table7, 4, 10);
      } else if (i >= 28 && i <= 30) {
       table7.rows[5].cells[i-28].innerHTML = textCon;
       DayColorsss (table7, 5, 10);
      } 
    }

     // Разукрашиваем таблицу согласно графику работы

      function DayColor (table, j, x) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         let DayNew2 = DayNew.getMonth();
         DayM = table.rows[j].cells[i].textContent;
         DayM = DayM -1;
         if (x-DayNew2 == 0  && DayM+1 == DayNew1) {
            table.rows[j].cells[i].style.fontSize = '25px';
            table.rows[j].cells[i].style.color = '#ee0c0c';
            table.rows[j].cells[i].style.fontWeight = 'bold';
           }
         if (DayM >= 0) {
           if ((DayM%4 == 1) || (DayM%4 == 2)) {
           table.rows[j].cells[i].bgColor = '#7fffd4';
           } else if ((DayM%4 == 3) || (DayM%4 == 0)) {
            table.rows[j].cells[i].bgColor = '#a9a9a9';
           } 
          } else if (DayM < 0) {
            table.rows[j].cells[i].display = 'none';
           } 
         }
        }
       
        function DayColors (table, j, x) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         let DayNew2 = DayNew.getMonth();
         DayM = table.rows[j].cells[i].textContent;
         DayM = DayM -3;
         if (x - DayNew2 === 0  && DayM + 3 == DayNew1) { 
            table.rows[j].cells[i].style.fontSize = '25px';
            table.rows[j].cells[i].style.color = '#ee0c0c';
            table.rows[j].cells[i].style.fontWeight = 'bold';
           } 
         if (DayM >= -2) {
          if ((DayM%4 == 1) || (DayM%4 == 2) || (DayM%4 == -2)) {
            table.rows[j].cells[i].bgColor = '#7fffd4';
           } else if ((DayM%4 == 3) || (DayM%4 == 0) || (DayM%4 == -1)) {
            table.rows[j].cells[i].bgColor = '#a9a9a9';
           } 
         } else if (DayM < -1) {
            table.rows[j].cells[i].display = 'none';
         } 
         }
        }

        function DayColorss (table, j) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         let DayNew2 = DayNew.getMonth();
         DayM = table.rows[j].cells[i].textContent;
         if (DayM > 0) {
          if ((DayM%4 == 1) || (DayM%4 == 2) || (DayM%4 == -2)) {
            table.rows[j].cells[i].bgColor =  '#a9a9a9';
           } else if ((DayM%4 == 3) || (DayM%4 == 0) || (DayM%4 == -1)) {
            table.rows[j].cells[i].bgColor = '#7fffd4';
           } 
         } else if (DayM <= 0) {
            table.rows[j].cells[i].display = 'none';
         } else if (DayM == DayNew1) {
            table.rows[j].cells[i].bgColor = 'green';
         }
         }
        }

        function DayColorsss (table, j, x) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         let DayNew2 = DayNew.getMonth();
         DayM = table.rows[j].cells[i].textContent;
         if (x - DayNew2 === 0  && DayM == DayNew1) { 
            table.rows[j].cells[i].style.fontSize = '25px';
            table.rows[j].cells[i].style.color = '#ee0c0c';
            table.rows[j].cells[i].style.fontWeight = 'bold';
           } 
         if (DayM > 0) {
          if ((DayM%4 == 1) || (DayM%4 == 2) || (DayM%4 == -2)) {
            table.rows[j].cells[i].bgColor = '#7fffd4';
           } else if ((DayM%4 == 3) || (DayM%4 == 0) || (DayM%4 == -1)) {
            table.rows[j].cells[i].bgColor = '#a9a9a9';
           } 
         } else if (DayM <= 0) {
            table.rows[j].cells[i].display = 'none';
         } else if (DayM == DayNew1) {
            table.rows[j].cells[i].bgColor = 'green';
         }
         }
        }

        table5.rows[1].cells[3].bgColor = '#a9a9a9';
    // Подсчитываем заработную плату
   function CalcMoneys (tables) {
      let HoryaM = 0;
      let ShapowalM = 0;
      for (let i = 0; i < 7; i++) {
         for (let j = 1; j < 6; j++) {
              let BColor = tables.rows[j].cells[i].bgColor;
              if (BColor == '#7fffd4') {
                  HoryaM = HoryaM +1;
              } else if (BColor == '#a9a9a9') {
               ShapowalM = ShapowalM +1;
              }
         }
         tables.rows[6].cells[1].innerHTML = HoryaM + ' дней, <br>' + (HoryaM*240+200) + ' pln.';
         tables.rows[6].cells[2].innerHTML = ShapowalM + ' дней, <br>' + (ShapowalM*240+200) + ' pln.';
      }
   }
   function CalcMoney (tables) {
      let HoryaM = 0;
      let ShapowalM = 0;
      for (let i = 0; i < 7; i++) {
         for (let j = 1; j < 7; j++) {
              let BColor = tables.rows[j].cells[i].bgColor;
              if (BColor == '#7fffd4') {
                  HoryaM = HoryaM +1;
              } else if (BColor == '#a9a9a9') {
               ShapowalM = ShapowalM +1;
              }
         }
         tables.rows[7].cells[1].innerHTML = HoryaM + ' дней, <br>' + (HoryaM*240+200) + ' pln.';
         tables.rows[7].cells[2].innerHTML = ShapowalM + ' дней, <br>' + (ShapowalM*240+200) + ' pln.';
      }
   }

CalcMoney (table1);
CalcMoneys (table2);
CalcMoneys (table3);
CalcMoney (table4);
CalcMoneys (table5);
CalcMoneys (table6);
CalcMoneys (table7);

// Подсчитываеи дни до отъезда
function advent () {
   let DayAdven = new Date(2021, 10, 30); 
   let diff = DayAdven - new Date ();
   let diff1 = diff/60000/60/24;
   diff1 = Math.floor(diff1) + 1;
   if (diff1 > 0) {
  adventure.insertAdjacentHTML('beforeend', + diff1 + ' д. или ' + Math.floor(diff1/4) + ' с.');
}
}
advent ();

// Подсчитываем кто работает в этот день
calc.onclick = function workingDay() {
   let day = prompt("Введите дату согласно примеру", "2021-06-16");
   let DayN = new Date (day);
   let NDay = new Date(2021, 04, 17); 
   let difference = DayN - NDay;
   let difference1 = difference/60000/60/24;
   difference1 =  Math.floor(difference1) + 1;
   let difference2 = DayN -  new Date ();
   let mse;
   let calc1 = document.getElementById('calc1');
if (difference2 > 0) {
   if (difference1%4 == 1) {
    mse = '<div>Это первый рабочий день Алены и Саши.</div>';
   } else if (difference1%4 == 2) {
    mse = '<div>Это второй рабочий день Алены и Саши.</div>';
   } else if (difference1%4 == 3) {
    mse = '<div>Это первый рабочий день Серого и Макса.</div>';
   } else if (difference1%4 == 0) {
    mse = '<div>Это второй рабочий день Серого и Макса.</div>';
   } 
} else if (difference2 < 0) {
   mse = '<div>Этот день уже отработан.</div>';
} else if (difference !== Number) {
   mse = '<div>Проверьте правильность вводимых данных.</div>';
 }

calc2.innerHTML = DayN.toLocaleString() + mse;
}

//Вопрос перед перезагрузкой
/*window.onbeforeunload = function() {
   return false;
 };*/


 //пока нет Серого
 /*
function NotSerego(table, j, i) {
   table.rows[j].cells[i].style.textDecoration = 'underline overline'; 
}
NotSerego(table4, 4, 1);
NotSerego(table4, 4, 2);
NotSerego(table4, 4, 6);
NotSerego(table4, 5, 0);
NotSerego(table4, 5, 1);
NotSerego(table4, 5, 2);
NotSerego(table4, 5, 4);
NotSerego(table4, 5, 5);
NotSerego(table4, 5, 6);
NotSerego(table4, 6, 0);
//NotSerego(table5, 1, 2);
NotSerego(table5, 1, 3);
NotSerego(table5, 1, 4);
NotSerego(table5, 1, 6);
NotSerego(table5, 2, 0);
NotSerego(table5, 2, 1);
NotSerego(table5, 2, 3);
NotSerego(table5, 2, 4);
NotSerego(table5, 2, 6);
NotSerego(table5, 3, 0);
*/
//Сладеры

let wrapper = document.querySelector('.wrapper')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let up = document.querySelector('.up')
let down= document.querySelector('.down')
let slidesLength = right.querySelectorAll('div').length
let activeSlideIndex = 4

left.style.top = `-${
   (slidesLength - 1)*100
}vh`

up.addEventListener('click', () => changeSlide('up'))
down.addEventListener('click', () => changeSlide('down'))

let changeSlide = (direction) => {
   let sliderHeight = wrapper.clientHeight
   if(direction === 'up') {
      activeSlideIndex++
      if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 2
      }
   } else if(direction === 'down') {
      activeSlideIndex--
   if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
      }
   }

    right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    left.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

//Меняем тему
function switchTheme() {
   let check = document
   .getElementById('theme_css')
   .classList[0] === 'light';

   let element = document.getElementById('theme_css');

   if (check) {
   element.href = 'style1.css';
   element.classList.remove('light')
   element.classList.add('dark');
   } else {
   element.href = 'style.css';
   element.classList.remove('dark')
   element.classList.add('light');
   location.reload();
   }
}

/*let scrollId;
function scroll (table) {
   let DayNew = new Date(); 
   let DayNew2 = DayNew.getMonth();
   let numId = parseInt(table);
   if (DayNew2 - 4 == 0) {
      scrollId == table;
   }  
}*/

document.getElementById("table6").scrollIntoView({behavior: 'smooth'});