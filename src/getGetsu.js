export function getGetsu(b){
  const date = new Date(this);
  const month = date.getMonth();
  let kanji = "";
  
  if(b === true) {
    switch (month) {
    case 0: 
      kanji = "一";
      break;
    case 1:
      kanji = "二";
      break;
    case 2: 
      kanji = "三";
      break;
    case 3: 
      kanji = "四";
      break;
    case 4:
      kanji = "五";
      break;
    case 5: 
      kanji = "六";
      break;
    case 6: 
      kanji = "七";
      break;
    case 7: 
      kanji = "八";
        break;
    case 8: 
      kanji = "九";
        break;
    case 9: 
      kanji = "十";
      break;
    case 10: 
      kanji = "十一";
      break;
    case 11: 
      kanji = "十二";
      break;
    }
      return kanji.concat("月");
  } else {
       switch (month) {
    case 0: 
      kanji = "１";
      break;
    case 1:
      kanji = "２";
      break;
    case 2: 
      kanji = "３";
      break;
    case 3: 
      kanji = "４";
      break;
    case 4:
      kanji = "５";
      break;
    case 5: 
      kanji = "６";
      break;
    case 6: 
      kanji = "７";
      break;
    case 7: 
      kanji = "８";
        break;
    case 8: 
      kanji = "９";
        break;
    case 9: 
      kanji = "１０";
      break;
    case 10: 
      kanji = "１１";
      break;
    case 11: 
      kanji = "１２";
      break;
    }
      return kanji.concat("月");
  }
}

