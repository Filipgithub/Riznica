package hr.addiko.riznica.core.command

import grails.validation.Validateable

// primjeniti na komandama iste stvari kao na servisima

class CategoryCommand implements Validateable {
  Long id
  String name

  static constraints = {
    name nullable: true
    id nullable: true
  }
}
