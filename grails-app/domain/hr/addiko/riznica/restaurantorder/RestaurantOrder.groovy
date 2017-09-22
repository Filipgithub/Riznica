package hr.addiko.riznica.restaurantorder

import hr.addiko.riznica.User

class RestaurantOrder {

    String restaurantName
    String orderFood

    User user
    String userName

    static constraints = {
        restaurantName nullable: true
        orderFood nullable: true
        user nullable: true
        userName nullable: true
    }
    static mapping = {
        user lazy: false
    }
}
