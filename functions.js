const men = ["Mike", "Socrates", "Edison", "Albert", "Scot"];


// checkin if given name is in list of men's
function checkIfMen(name) {

    // validate if name is a string
    if(typeof name !== "string") return "Name is not a string.";

    // check if name exist
    let check = men.find((men) => men === name );
    if (check) return true
    else return "Unrecognized name.";
}
