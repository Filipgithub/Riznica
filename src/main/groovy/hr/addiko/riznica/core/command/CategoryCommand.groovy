package hr.addiko.riznica.core.command

import grails.validation.Validateable

class CategoryCommand implements Validateable {
  Long id
  String name

  static constraints = {
    name nullable: true
    id nullable: true
  }
}
