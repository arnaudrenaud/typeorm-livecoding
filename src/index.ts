import Wilder from "./entities/Wilder";

const me = new Wilder({ id: "1234", firstName: "Arnaud", lastName: "Renaud" });
console.log({ me, myFullName: me.fullName });

console.log("Changing last name…");
me.newLastName = "Neuf";
console.log({ me });
