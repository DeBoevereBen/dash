String.prototype.dash = function () {return this.split(" ").map(x => x.split("").join("-")).join(" ").replace(/--+/g, "-");}
String.prototype.undash = function () {return this.split("-").join("");}