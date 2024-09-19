import { test, beforeEach } from 'node:test'
import assert from 'node:assert'
import { Appointment } from './appointment.js'


let appointment1, appointment2

beforeEach(() => {
  appointment1 = new Appointment({
    id: 1,
    startsAt: new Date('2024-09-19T10:00:00'),
    endsAt: new Date('2024-09-19T11:00:00'),
    description: 'Consulta médica'
  })


})

test('Deve ser capaz de criar um novo appointment', () => {
  assert.ok(appointment1 instanceof Appointment)

  // verificando se as propriedades existem no objeto
  assert.notEqual(appointment1.id, undefined, '"id" não deve ser undefined')
  assert.ok(appointment1.startsAt, undefined, '"startsAt" não deve ser undefined')
  assert.ok(appointment1.endsAt, undefined, '"endsAt" não deve ser undefined')
  assert.notEqual(appointment1.description, undefined, '"description" não deve ser undefined')

  // verificando se os valores foram atribuídos corretamente
  assert.ok(appointment1.startsAt instanceof Date)
  assert.ok(appointment1.endsAt instanceof Date)
  assert.strictEqual(appointment1.description, 'Consulta médica')
})

test('Deve indicar se o appointment estiver em conflito com um já criado', () => {
  const outroAppointment = new Appointment({
    id: 3,
    startsAt: new Date('2024-09-19T10:30:00'),
    endsAt: new Date('2024-09-19T11:30:00'),
    description: 'Consulta médica'
  })
  assert.ok(appointment1.isInConflictWith(outroAppointment), 'Deve retornar true')
})

test('Deve indicar se o appointment já passou', () => {
  const appointmentPassado = new Appointment({
    id: 4,
    startsAt: new Date('2024-09-15T09:00:00'),
    endsAt: new Date('2024-09-19T10:00:00'),
    description: 'Consulta médica'
  })
  assert.ok(appointmentPassado.isPast(), 'Deve retornar true')
})

test('Deve retornar um erro caso a data inicial do appointment já tenha passado', () => {
  assert.throws(() => {
    appointment2 = new Appointment({
      id: 2,
      data: new Date('2024-09-15T11:00:00'),
      descricao: 'Reunião de trabalho'
    })
  }, Error)
})
