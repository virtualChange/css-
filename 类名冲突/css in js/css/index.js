import {
    rander
} from './util.js'
const div1 = document.getElementsByClassName('div1')[0];
const div2 = document.getElementsByClassName('div2')[0];
const style = {
    width: "300px",
    height: "300px",
    margin: "0 auto"
}
const color = {
    color: "#f40"
}
const bg = {
    background: "#ccc"
}
const border  ={
    border:"1px solid"
}
rander(div1, style, color, bg)
rander(div2, style, bg,border)