import { DataSource } from "typeorm";
import Wilder from "./entities/Wilder";
import School from "./entities/School";

const main = async () => {
  const dataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    entities: [Wilder, School],
    synchronize: true,
  });

  await dataSource.initialize();
  console.log("Successfully connected and synchronized to database");

  const me = new Wilder({
    id: "1234",
    firstName: "Arnaud",
    lastName: "Renaud",
  });
  console.log({ me, myFullName: me.fullName });

  console.log("Changing last name…");
  me.newLastName = "Neuf";
  console.log({ me });

  await me.save();

  const mySchool = new School({ id: "PARIS", city: "Paris" });
  console.log({ mySchool });

  await mySchool.save();

  me.school = mySchool;
  await me.save();

  const friend = new Wilder({ id: "5678", firstName: "Bon", lastName: "Ami" });
  friend.school = mySchool;
  await friend.save();

  await mySchool.reload();
  console.dir({ mySchool }, { depth: null });

  console.log(`Wilders count in Paris: ${await mySchool.wildersCount}`);

  await mySchool.makeInactive();

  console.log("All active schools:");
  console.dir(await School.getAllActiveSchools(), {
    depth: null,
  });
};

main();
