const men = ["Mike", "Socrates", "Edison", "Albert", "Scot"];
const menAreMortal = true;

if (menAreMortal) {
    console.log("All men are mortal");
} else {
    console.log("All men are not mortal");
}

if (men.includes("Socrates") && menAreMortal) {
    console.log("Socrates is a men");
    console.log("Therefore, socrates is mortal.");
} else {
    console.log("Socrates is not a men");
}




// EXTRA CREDIT
const cake = {
    name: "Vanilla cake",
    flavour: "vanilla"
};


if (cake.flavour === "vanilla" || cake.flavour === "chocolate") {
    console.log("This cake is either vanilla or chocolate.");
    if (cake.flavour !== "chocolate") {
        console.log("This cake is not chocolate.");
        console.log("Therefore, this cake is vanilla.");
    }
}



