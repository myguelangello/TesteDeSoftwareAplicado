/* interface AppointmentProps {
  id: string;
  startsAt: Date;
  endsAt: Date;
  description: string;
} */

export class Appointment {
  id
  startsAt
  endsAt
  description

  constructor({ id, startsAt, endsAt, description }) {
    if (!id || !startsAt || !endsAt || !description) {
      throw new Error("Todos os campos são obrigatórios: id, startsAt, endsAt, description");
    }

    this.id = id;
    this.startsAt = startsAt;
    this.endsAt = endsAt;
    this.description = description;
  }

  isInConflictWith(otherAppointment) {
    return (
      this.startsAt >= otherAppointment.startsAt &&
      this.startsAt < otherAppointment.endsAt
    ) || (
        this.endsAt > otherAppointment.startsAt &&
        this.endsAt <= otherAppointment.endsAt
      );
  }

  isPast() {
    return this.startsAt < new Date();
  }

  updateStartsAt(newStartsAt) {
    this.startsAt = newStartsAt;
  }


  // Getters

  get startsAt() {
    return this.startsAt;
  }
  get endsAt() {
    return this.endsAt;
  }
  get description() {
    return this.description;
  }
  get id() {
    return this.id;
  }
}