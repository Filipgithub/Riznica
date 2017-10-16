package hr.addiko.riznica.person

import grails.transaction.Transactional
import hr.addiko.riznica.core.command.PersonCommand

@Transactional
class PersonService {

  def readAll() {
    def result = Person.findAll()

    [success: true, data: result]
  }

  def create(PersonCommand cmd) {
    Person person = new Person(name: cmd.name, password: cmd.password)
    person.save()

    [success: true]
  }

  def update(PersonCommand cmd) {
// def per = Person.get(cmd.id)
// per.name = cmd.name
// per.email = cmd.email
// per.phone = cmd.phone
// per.save(flush: true)


    // maknuti, napraviti koristenjem findById i onda save
    Person.executeUpdate(
      "UPDATE Person p SET " +
        "p.name=:newName, p.password=:newPassword" +
        "WHERE p.id=:id",
      [newName: cmd.name, newPassword: cmd.password, id: cmd.id]
    )


    [success: true]
  }

  def delete(PersonCommand cmd) {
    Person.findById(cmd.id).delete()

    [success: true]
  }

}



