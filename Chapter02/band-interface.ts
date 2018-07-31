interface Band {
    name: string,
    total_members: number
}

function unknowBand(band: Band): void {
    console.log("This band: " + band.name + ", has: " +
    band.total_members + " members");
}

// create a band object with the same properties from Band interface:
let newband = {
    name: "Black Sabbath",
    total_members: 4
}
console.log(unknowBand(newband));