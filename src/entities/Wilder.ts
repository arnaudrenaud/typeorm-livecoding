class Wilder {
  readonly id: string;
  firstName: string;
  lastName: string;

  constructor({
    id,
    firstName,
    lastName,
  }: {
    id: string;
    firstName: string;
    lastName: string;
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set newLastName(newLastName: string) {
    this.lastName = newLastName.toUpperCase();
  }
}

export default Wilder;
