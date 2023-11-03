import { DataSource } from "typeorm";
import Wilder from "./entities/Wilder";

const main = async () => {
  const dataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    entities: [Wilder],
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
};

main();
