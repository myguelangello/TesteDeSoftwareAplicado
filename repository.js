export class InMemoryRepository {
  items = [];

  async findById(id) {
    const appointment = this.items.find(appointment => appointment.id === id);
    if (!appointment) {
      return null
    }

    return appointment;
  }
}