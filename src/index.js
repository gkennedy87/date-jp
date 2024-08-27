import getDayJP from './getDay';
import getMonthJP from './getMonth';

export default function index(){
    const today = new Date();
    const dayKanji = today.getDayJP();
    const month = today.getMonthJP();

    return (
        console.log(today, dayKanji, month)
    )
}