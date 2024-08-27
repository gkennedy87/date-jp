import half2full from "./utils/half2full";

export function getToshi() {
    const date = new Date(this);
    const year = date.getFullYear();
    const zenkaku = half2full(year.toString());

    return zenkaku.concat('年')

}