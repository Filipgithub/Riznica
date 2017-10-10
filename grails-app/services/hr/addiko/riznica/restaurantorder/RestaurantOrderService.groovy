package hr.addiko.riznica.restaurantorder

import grails.plugin.grich.search.service.AdvancedSearchService
import grails.plugin.springsecurity.SpringSecurityService
import grails.transaction.Transactional
import hr.addiko.riznica.User
import hr.addiko.riznica.core.command.RestaurantOrderCommand

import java.text.SimpleDateFormat

@Transactional
class RestaurantOrderService {

    SpringSecurityService springSecurityService
    AdvancedSearchService advancedSearchService

    def create(RestaurantOrderCommand cmd) {

        User u = (User) springSecurityService.getCurrentUser()
        String pattern = "dd.MM.yyyy HH:mm:ss"
        SimpleDateFormat format = new SimpleDateFormat(pattern)
        String date = format.format(new Date())
        RestaurantOrder restaurantOrder = new RestaurantOrder()
        restaurantOrder.restaurantName = cmd.restaurantName
        restaurantOrder.orderFood = cmd.orderFood
        restaurantOrder.user  = u
        restaurantOrder.userName = u.username
        restaurantOrder.simpleDateFormat = date.split(" ")[0]
        restaurantOrder.time = date.split(" ")[1]
        restaurantOrder.save(flush: true)

        [success: true]
    }

    def read(RestaurantOrderCommand cmd) {

        def result = RestaurantOrder.createCriteria().list({
            or {
                if(cmd.id)
                    eq('id', cmd.id)
                if(cmd.restaurantName)
                    eq('restaurantName', cmd.restaurantName)
            }
        })


        [success: true, data: result]

    }

    def readByOrderFood(RestaurantOrderCommand cmd){
//        def result = RestaurantOrder.createCriteria().list {
//            or {
//                eq("orderFood", cmd.orderFood)
//// eq("user",User.findById(u.id))
//            }
//        }

        def additionalCriteria = {
            or {
                if(cmd.id)
                    eq('id', cmd.id)
               if(cmd.restaurantName)
                    eq('restaurantName', cmd.restaurantName)
            }

        }
        cmd.additionalCriteria = additionalCriteria
        advancedSearchService.search(cmd)
    }

      //  [success: true, data: result]

}
