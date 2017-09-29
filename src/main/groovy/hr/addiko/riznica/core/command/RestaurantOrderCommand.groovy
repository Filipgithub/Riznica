package hr.addiko.riznica.core.command

import grails.validation.Validateable
import hr.addiko.riznica.User

import java.text.SimpleDateFormat

class RestaurantOrderCommand implements Validateable {
  Long id
  String restaurantName
  String orderFood
  String simpleDateFormat
  String time

  User user
  String userName

  static constraints = {
    id nullable: true
    restaurantName nullable: true
    orderFood nullable: true
    user nullable: true
    userName nullable:true
    simpleDateFormat nullable: true
    time nullable: true
  }
}
