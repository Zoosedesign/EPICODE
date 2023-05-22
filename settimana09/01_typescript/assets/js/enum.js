"use strict";
var Mesi;
(function (Mesi) {
    Mesi[Mesi["gennaio"] = 1] = "gennaio";
    Mesi[Mesi["febbraio"] = 2] = "febbraio";
    Mesi[Mesi["marzo"] = 3] = "marzo";
    Mesi[Mesi["aprile"] = 4] = "aprile";
    Mesi[Mesi["maggio"] = 5] = "maggio";
    Mesi[Mesi["giugno"] = 6] = "giugno";
    Mesi[Mesi["luglio"] = 7] = "luglio";
    Mesi[Mesi["agosto"] = 8] = "agosto";
    Mesi[Mesi["settembre"] = 9] = "settembre";
    Mesi[Mesi["ottobre"] = 10] = "ottobre";
    Mesi[Mesi["novembre"] = 11] = "novembre";
    Mesi[Mesi["dicembre"] = 12] = "dicembre";
})(Mesi || (Mesi = {}));
console.log(Mesi.giugno);
