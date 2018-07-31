function unknowBand(band) {
    console.log("This band: " + band.name + ", has: " +
        band.total_members + " members");
}
// create a band object with the same properties from Band interface:
var newband = {
    name: "Black Sabbath",
    total_members: 4
};
console.log(unknowBand(newband));
