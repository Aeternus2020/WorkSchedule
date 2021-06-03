
//let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');
let table4 = document.getElementById('table4');
let table5 = document.getElementById('table5');
let table6 = document.getElementById('table6');
let table7 = document.getElementById('table7');
//let beginD = new Date(2021, 04, 01); 
let beginDi = new Date(2021, 04, 31); 
let beginDl = new Date(2021, 05, 30); 
let beginDA = new Date(2021, 07, 01);
let beginDS = new Date(2021, 07, 31);
let beginDO = new Date(2021, 08, 30);
let beginDN = new Date(2021, 09, 31);

/*for (let i = 0; i < 31; i++) {
if (i < 2) {
 table1.rows[1].cells[i+5].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + i));
 DayColor1 (1);
} else if ( i >= 2 && i <= 8) {
 table1.rows[2].cells[i-2].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColor1 (2);
} else if ( i >= 9 && i <= 15) {
 table1.rows[3].cells[i-9].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColor1 (3);
} else if (i >= 16 && i <= 22) {
 table1.rows[4].cells[i-16].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColor1 (4);
} else if (i >= 23 && i <= 29) {
 table1.rows[5].cells[i-23].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColor1 (5);
} else if (i >= 30 && i < 31) {
 table1.rows[6].cells[i-30].innerHTML = beginD.getDate(beginD.setDate(beginD.getDate() + 1));
 DayColor1 (6);
} 
}*/

for (let i = 0; i < 31; i++) {
   if (i < 6) {
    table2.rows[1].cells[i+1].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 1);
   } else if ( i >= 7 && i <= 13) {
    table2.rows[2].cells[i-7].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 2);
   } else if ( i >= 14 && i <= 20) {
    table2.rows[3].cells[i-14].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 3);
   } else if (i >= 21 && i <= 27) {
    table2.rows[4].cells[i-21].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 4);
   } else if (i >= 28 && i <= 31) {
    table2.rows[5].cells[i-28].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 5);
   } else if (i >= 30 && i < 31) {
    table2.rows[6].cells[i-30].innerHTML = beginDi.getDate(beginDi.setDate(beginDi.getDate() + 1));
    DayColor (table2, 6);
   } 
   }
for (let i = 0; i < 32; i++) {
      if (i < 4) {
       table3.rows[1].cells[i+3].innerHTML = beginDl.getDate(beginDl.setDate(beginDl.getDate() + 1));
       DayColors (table3, 1);
      } else if ( i >= 5 && i <= 11) {
       table3.rows[2].cells[i-5].innerHTML = beginDl.getDate(beginDl.setDate(beginDl.getDate() + 1));
       DayColors (table3, 2);
      } else if ( i >= 12 && i <= 18) {
       table3.rows[3].cells[i-12].innerHTML = beginDl.getDate(beginDl.setDate(beginDl.getDate() + 1));
       DayColors (table3, 3);
      } else if (i >= 19 && i <= 25) {
       table3.rows[4].cells[i-19].innerHTML = beginDl.getDate(beginDl.setDate(beginDl.getDate() + 1));
       DayColors (table3, 4);
      } else if (i >= 26 && i <=31) {
       table3.rows[5].cells[i-26].innerHTML = beginDl.getDate(beginDl.setDate(beginDl.getDate() + 1));
       DayColors (table3, 5);
      } 
      }
      
 for (let i = 0; i < 32; i++) {
     if (i < 1) {
     table4.rows[1].cells[i+6].innerHTML = beginDA.getDate(beginDA.setDate(beginDA.getDate() + i));
      DayColorsss (table4, 1);
     } else if ( i >= 2 && i <= 8) {
     table4.rows[2].cells[i-2].innerHTML = beginDA.getDate(beginDA.setDate(beginDA.getDate() + 1));
      DayColorsss (table4, 2);
     } else if ( i >= 9 && i <= 15) {
      table4.rows[3].cells[i-9].innerHTML = beginDA.getDate(beginDA.setDate(beginDA.getDate() + 1));
    DayColorsss (table4, 3);
     } else if (i >= 16 && i <= 22) {
     table4.rows[4].cells[i-16].innerHTML = beginDA.getDate(beginDA.setDate(beginDA.getDate() + 1));
      DayColorsss (table4, 4);
     } else if (i >= 23 && i <= 29) {
      table4.rows[5].cells[i-23].innerHTML = beginDA.getDate(beginDA.setDate(beginDA.getDate() + 1));
    DayColorsss (table4, 5);
     } else if (i >= 30 && i <= 31) {
      table4.rows[6].cells[i-30].innerHTML = beginDA.getDate(beginDA.setDate(beginDA.getDate() + 1));
      DayColorsss (table4, 6);
     } 
   }
      
 for (let i = 0; i < 31; i++) {
     if (i < 6) {
      table5.rows[1].cells[i+1].innerHTML = beginDS.getDate(beginDS.setDate(beginDS.getDate() + 1));
      DayColor (table5, 1);
    } else if ( i >= 7 && i <= 13) {
      table5.rows[2].cells[i-7].innerHTML = beginDS.getDate(beginDS.setDate(beginDS.getDate() + 1));
      DayColor (table5, 2);
     } else if ( i >= 14 && i <= 20) {
      table5.rows[3].cells[i-14].innerHTML = beginDS.getDate(beginDS.setDate(beginDS.getDate() + 1));
      DayColor (table5, 3);
     } else if (i >= 21 && i <= 27) {
      table5.rows[4].cells[i-21].innerHTML = beginDS.getDate(beginDS.setDate(beginDS.getDate() + 1));
      DayColor (table5, 4);
     } else if (i >= 28 && i <= 31) {
      table5.rows[5].cells[i-28].innerHTML = beginDS.getDate(beginDS.setDate(beginDS.getDate() + 1));
      DayColor (table5, 5);
     } else if (i >= 30 && i < 31) {
      table5.rows[6].cells[i-30].innerHTML = beginDS.getDate(beginDS.setDate(beginDS.getDate() + 1));
     DayColor (table5, 6);
     } 
     }
 for (let i = 0; i < 32; i++) {
   if (i < 4) {
     table6.rows[1].cells[i+3].innerHTML = beginDO.getDate(beginDO.setDate(beginDO.getDate() + 1));
      DayColors (table6, 1);
     } else if ( i >= 5 && i <= 11) {
      table6.rows[2].cells[i-5].innerHTML = beginDO.getDate(beginDO.setDate(beginDO.getDate() + 1));
      DayColors (table6, 2);
     } else if ( i >= 12 && i <= 18) {
     table6.rows[3].cells[i-12].innerHTML = beginDO.getDate(beginDO.setDate(beginDO.getDate() + 1));
     DayColors (table6, 3);
     } else if (i >= 19 && i <= 25) {
      table6.rows[4].cells[i-19].innerHTML = beginDO.getDate(beginDO.setDate(beginDO.getDate() + 1));
      DayColors (table6, 4);
     } else if (i >= 26 && i <=31) {
      table6.rows[5].cells[i-26].innerHTML = beginDO.getDate(beginDO.setDate(beginDO.getDate() + 1));
     DayColors (table6, 5);
    } 
    }
    for (let i = 0; i < 31; i++) {
      if (i < 1) {
      table7.rows[1].cells[i+6].innerHTML = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
       DayColorsss (table7, 1);
      } else if ( i >= 2 && i <= 8) {
      table7.rows[2].cells[i-2].innerHTML = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
       DayColorsss (table7, 2);
      } else if ( i >= 9 && i <= 15) {
       table7.rows[3].cells[i-9].innerHTML = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
     DayColorsss (table7, 3);
      } else if (i >= 16 && i <= 22) {
      table7.rows[4].cells[i-16].innerHTML = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
       DayColorsss (table7, 4);
      } else if (i >= 23 && i <= 29) {
       table7.rows[5].cells[i-23].innerHTML = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
     DayColorsss (table7, 5);
      } else if (i >= 30 && i <= 31) {
       table7.rows[6].cells[i-30].innerHTML = beginDN.getDate(beginDN.setDate(beginDN.getDate() + 1));
       DayColorsss (table7, 6);
      } 
    }

      function DayColor (table, j) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         DayM = table.rows[j].cells[i].textContent;
         DayM = DayM -1;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         if (DayM+1 == DayNew1) {
            table2.rows[j].cells[i].bgColor = '#ADFF2F';
           }
         if (DayM >= 0) {
           if ((DayM%4 == 1) || (DayM%4 == 2)) {
           table.rows[j].cells[i].bgColor = '#7fffd4';
           } else if ((DayM%4 == 3) || (DayM%4 == 0)) {
            table.rows[j].cells[i].bgColor = '#a9a9a9';
           } 
          } else if (DayM < 0) {
            table.rows[j].cells[i].bgColor = '#f7c892';
           } 
         }
        }
       
        function DayColors (table, j) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         DayM = table.rows[j].cells[i].textContent;
         DayM = DayM -3;
         if (DayM >= -2) {
          if ((DayM%4 == 1) || (DayM%4 == 2) || (DayM%4 == -2)) {
            table.rows[j].cells[i].bgColor = '#7fffd4';
           } else if ((DayM%4 == 3) || (DayM%4 == 0) || (DayM%4 == -1)) {
            table.rows[j].cells[i].bgColor = '#a9a9a9';
           } 
         } else if (DayM < -1) {
            table.rows[j].cells[i].bgColor = '#f7c892';
         } else if (DayM == DayNew1) {
            table.rows[j].cells[i].bgColor = 'green'
         }
         }
        }
        function DayColorss (table, j) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         DayM = table.rows[j].cells[i].textContent;
         if (DayM > 0) {
          if ((DayM%4 == 1) || (DayM%4 == 2) || (DayM%4 == -2)) {
            table.rows[j].cells[i].bgColor =  '#a9a9a9';
           } else if ((DayM%4 == 3) || (DayM%4 == 0) || (DayM%4 == -1)) {
            table.rows[j].cells[i].bgColor = '#7fffd4';
           } 
         } else if (DayM <= 0) {
            table.rows[j].cells[i].bgColor = '#f7c892';
         } else if (DayM == DayNew1) {
            table.rows[j].cells[i].bgColor = 'green'
         }
         }
        }
        function DayColorsss (table, j) { 
         for (let i = 0; i < 7; i++) {
         let DayM;
         let DayNew = new Date(); 
         let DayNew1 = DayNew.getDate();
         DayM = table.rows[j].cells[i].textContent;
         if (DayM > 0) {
          if ((DayM%4 == 1) || (DayM%4 == 2) || (DayM%4 == -2)) {
            table.rows[j].cells[i].bgColor = '#7fffd4';
           } else if ((DayM%4 == 3) || (DayM%4 == 0) || (DayM%4 == -1)) {
            table.rows[j].cells[i].bgColor = '#a9a9a9';
           } 
         } else if (DayM <= 0) {
            table.rows[j].cells[i].bgColor = '#f7c892';
         } else if (DayM == DayNew1) {
            table.rows[j].cells[i].bgColor = 'green'
         }
         }
        }


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
         tables.rows[6].cells[1].innerHTML = HoryaM + ' дней, <br>' + HoryaM*240 + ' pln.';
         tables.rows[6].cells[2].innerHTML = ShapowalM + ' дней, <br>' + ShapowalM*240 + ' pln.';
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
         tables.rows[7].cells[1].innerHTML = HoryaM + ' дней, <br>' + HoryaM*240 + ' pln.';
         tables.rows[7].cells[2].innerHTML = ShapowalM + ' дней, <br>' + ShapowalM*240 + ' pln.';
      }
   }


CalcMoneys (table2);
CalcMoneys (table3);
CalcMoney (table4);
CalcMoneys (table5);
CalcMoneys (table6);
CalcMoney (table7);


function advent () {
   let DayAdven = new Date(2021, 10, 30); 
   let diff = DayAdven - new Date ();
   let diff1 = diff/60000/60/24;
   diff1 = Math.floor(diff1) + 1;
   if (diff1 > 0) {
  adventure.insertAdjacentHTML('beforeend', + diff1 + ' д. или ' + Math.floor(diff1/31) + ' м.');
}
}
advent ();

calc.onclick = function workingDay() {
   let day = prompt("Введите дату согласно примеру", "2021-06-16");
   let DayN = new Date (day);
   let NDay = new Date(2021, 04, 17); 
   let difference = DayN - NDay;
   difference1 = difference/60000/60/24;
   difference1 =  Math.floor(difference1) + 1;
   let mse;
   let calc1 = document.getElementById('calc1');
if (difference > 0) {
   if (difference1%4 == 1) {
    mse = '<div>Это первый рабочий день Алены и Саши.</div>';
   } else if (difference1%4 == 2) {
    mse = '<div>Это второй рабочий день Алены и Саши.</div>';
   } else if (difference1%4 == 3) {
    mse = '<div>Это первый рабочий день Серого и Макса.</div>';
   } else if (difference1%4 == 0) {
    mse = '<div>Это второй рабочий день Серого и Макса.</div>';
   } 
} else if (difference < 0) {
   mse = '<div>Этот день уже отработан, не думай о прошлом, смотри вперед!</div>';
} else if (difference !== Number) {
   mse = '<div>Проверьте правильность вводимых данных.</div>';
 }

calc2.innerHTML = DayN.toLocaleString() + mse;
}
