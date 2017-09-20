package hr.addiko.riznica.core.command


import grails.validation.Validateable

class PersonCommand implements Validateable {

  Long id
  String name
  String password


  static constraints = {
    id nullable: true
    name nullable: true
    password nullable: true
  }
}