let map = new Map();

map.set("0","A");
map.set("1","B");map.set("2","C");map.set("3","D");map.set("4","E");map.set("5","F");map.set("6","G");map.set("7","H");map.set("8","I");map.set("9","J");map.set("10","K");map.set("11","L");map.set("12","M");map.set("13","N");map.set("14","O");
map.set("15","P");map.set("16","Q");map.set("17","R");map.set("18","S");map.set("19","T");map.set("20","U");map.set("21","V");map.set("22","W");map.set("23","X");map.set("24","L");map.set("25","Z");map.set("26","a");map.set("27","b");map.set("28","c");
map.set("29","d");map.set("30","e");map.set("31","f");map.set("32","g");map.set("33","h");map.set("34","i");map.set("35","j");map.set("36","k");map.set("37","l");map.set("38","m");map.set("39","n");map.set("40","o");map.set("41","p");map.set("42","q");map.set("43","r");map.set("44","s");
map.set("45","t");map.set("46","u");map.set("47","v");map.set("48","w");map.set("49","x");map.set("50","y");map.set("51","z");map.set("52","0");map.set("53","1");map.set("54","2");map.set("55","3");map.set("56","4");map.set("57","5");map.set("58","6");map.set("59","7");map.set("60","8");
map.set("61","9");map.set("62","+");map.set("63","/");;
function base64(str)
{
    const len = str.length;
    let s = "";
    for(let i = 0 ; i<len; i++)
    {
        let sl = str[i].charCodeAt().toString(2);
        for(let j = 0; j<8-sl.length; j++)
        {
            sl = "0" +sl;
        }
        s+=sl;
    }
    if(s.length%6 !== 0)
    {
        const num = s.length%6;
        for(let i = 0; i<6-num; i++)
        {
            s += "0";
        }
        
    }
    let array = [];
    let newlen = parseInt((str.length*8)/6);
    let base = "";
    if(str.length % 3 ===0)
    {
        for(let i = 0 ; i<newlen; i++)
        {
           
            array.push(s.slice(i*6,(i+1)*6));
            array[i] =parseInt(Number(array[i]),2).toString();
        }
        for(let i = 0 ; i<newlen; i++)
        {
            base += map.get(array[i])
        }
    }
    else
    {
        for(let i = 0 ; i<=newlen; i++)
        {
           
            array.push(s.slice(i*6,(i+1)*6));
            array[i] =parseInt(Number(array[i]),2).toString();
        }
        for(let i = 0 ; i<=newlen; i++)
        {
            base += map.get(array[i]);
        }

        for(let i = 0; i<3 - str.length%3; i++)
        {
            base += "=";
        }
    }

    console.log(base)
}
base64("qwera");


