package hr.addiko.riznica.core.command

import grails.validation.Validateable
import hr.addiko.riznica.User

class RestaurantOrderCommand implements Validateable {
  Long id
  String restaurantName
  String orderFood

  User user
  String userName

  static constraints = {
    id nullable: true
    restaurantName nullable: true
    orderFood nullable: true
    user nullable: true
    userName nullable:true
  }
}
