package hr.addiko.riznica.restaurantorder

import hr.addiko.riznica.User

import java.text.SimpleDateFormat

class RestaurantOrder {

    String restaurantName
    String orderFood
    String simpleDateFormat
    String time

    User user
    String userName

    static constraints = {
        restaurantName nullable: true
        orderFood nullable: true
        user nullable: true
        userName nullable: true
        simpleDateFormat nullable: true
    }
    static mapping = {
        user lazy: false
        simpleDateFormat lazy: false
    }
}
