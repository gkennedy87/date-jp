/**
 * Description: Nengo (年号) is a calendar system used in Japan that counts year according to an era. 
 * In modern Japan, the era name changes with the ascension of a new Emperor. The current era is 
 * Reiwa (令和) which began on May 1, 2019.
 */

//use .getTime() to compare dates in milliseconds, not dates

import { eras } from "./utils/eras"
import half2full from "./utils/half2full";

export function getNengo(){
    const erasArr = eras;
    const date = new Date(this)
    const year = date.getFullYear()

    const currentEra = erasArr.filter((era) => era.beginning > date && era.end >= date
    )
    const nengo = currentEra[0];

    return nengo.kanji


}