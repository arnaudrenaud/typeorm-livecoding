import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import Wilder from "./Wilder";

@Entity()
class School extends BaseEntity {
  @PrimaryColumn()
  readonly id!: string;

  @Column()
  city!: string;

  @Column({ default: true })
  isActive!: boolean;

  @OneToMany(() => Wilder, (wilder) => wilder.school, { eager: true })
  wilders!: Wilder[];

  constructor(args?: { id: string; city: string }) {
    super();

    if (args) {
      this.id = args.id;
      this.city = args.city;
    }
  }

  get wildersCount() {
    return Wilder.count({ where: { school: this } });
  }

  async makeInactive() {
    this.isActive = false;
    await this.save();
  }

  static getAllActiveSchools() {
    return School.find({ where: { isActive: true } });
  }
}

export default School;
