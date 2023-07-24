import {Hsluv} from "hsluv";

var conv = new Hsluv();
conv.hsluv_h = 10;
conv.hsluv_s = 75;
conv.hsluv_l = 65;
conv.hsluvToHex();
console.log(conv.hex); // Will print "#ec7d82"