package hr.addiko.riznica.core.command

import grails.plugin.grich.core.command.EntityCommand
import grails.plugin.grich.search.command.AdvancedSearchCommand
import grails.validation.Validateable
import hr.addiko.riznica.User
import hr.addiko.riznica.restaurantorder.RestaurantOrder

import java.text.SimpleDateFormat

class RestaurantOrderCommand extends AdvancedSearchCommand implements Validateable {

  EntityCommand orderType

  Long id
  String restaurantName
  String orderFood
  String simpleDateFormat
  String time

  User user
  String userName

  def getRootEntity(){
    orderType?.searchClass ?:RestaurantOrder
  }

  static searchConfig= [
    rootEntity           : RestaurantOrder,
    initializeAdditional: ["id","restaurantName", "orderFood", "userName","simpleDateFormat"]

  ]


  static constraints = {
    id nullable: true
    restaurantName nullable: true
    orderFood nullable: true
    user nullable: true
    userName nullable:true
    simpleDateFormat nullable: true
    time nullable: true
    orderType nullable: true
    start nullable: true
    limit nullable: true
  }
}
