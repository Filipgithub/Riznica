package hr.addiko.riznica.restaurantorder

import grails.plugin.springsecurity.SpringSecurityService
import grails.transaction.Transactional
import hr.addiko.riznica.User
import hr.addiko.riznica.core.command.RestaurantOrderCommand

@Transactional
class RestaurantOrderService {

    SpringSecurityService springSecurityService

    def create(RestaurantOrderCommand cmd) {

        User u = (User) springSecurityService.getCurrentUser()

        RestaurantOrder restaurantOrder = new RestaurantOrder()
        restaurantOrder.restaurantName = cmd.restaurantName
        restaurantOrder.orderFood = cmd.orderFood
        restaurantOrder.user  = u
        restaurantOrder.userName = u.username
        restaurantOrder.save(flush: true)

        [success: true]
    }

    def read() {

        def result = RestaurantOrder.findAll()
        [success: true, data: result]

    }
}
