export function getNichi(b) {
    
        const date = new Date(this);
        const day = date.getDay();
        let kanji = "";
        
        switch (day) {
        case 0: 
            kanji = "日";
          break;
        case 1:
          kanji = "月";
            break;
        case 2: 
            kanji = "火";
          break;
        case 3: 
            kanji = "水";
          break;
        case 4:
            kanji = "木";
          break;
        case 5: 
            kanji = "金";
          break;
        case 6: 
            kanji = "土";
          break;
        }
        
        if (b === true) {
         return kanji.concat('曜日');
        } else {
         return kanji;
        }
}
