package hr.addiko.riznica.restaurantorder

import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import hr.addiko.riznica.core.command.RestaurantOrderCommand

class RestaurantOrderController extends GrichRegistryDataController {

    RestaurantOrderService RestaurantOrderService

    def create(RestaurantOrderCommand cmd) {
        validateCallAndRender(cmd, { RestaurantOrderService.create(cmd) })
    }

    def read(RestaurantOrderCommand cmd) {
        validateCallAndRender(cmd, {RestaurantOrderService.read(cmd) })
    }

    def readByOrderFood(RestaurantOrderCommand cmd){
    validateCallAndRender(cmd,{RestaurantOrderService.readByOrderFood(cmd)})
    }
}
