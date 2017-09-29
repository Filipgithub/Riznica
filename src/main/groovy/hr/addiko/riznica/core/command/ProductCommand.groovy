package hr.addiko.riznica.core.command

import grails.validation.Validateable

class ProductCommand implements Validateable {
  Long id
  String image

  static constraints = {
    id nullable: true
    image nullable:true
  }
}
