import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Wilder extends BaseEntity {
  @PrimaryColumn()
  readonly id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  constructor(args: { id: string; firstName: string; lastName: string }) {
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
