import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import School from "./School";

@Entity()
class Wilder extends BaseEntity {
  @PrimaryColumn()
  readonly id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @ManyToOne(() => School, (school) => school.wilders)
  school!: School;

  constructor(args?: { id: string; firstName: string; lastName: string }) {
    super();

    if (args) {
      this.id = args.id;
      this.firstName = args.firstName;
      this.lastName = args.lastName;
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set newLastName(newLastName: string) {
    this.lastName = newLastName.toUpperCase();
  }
}

export default Wilder;
