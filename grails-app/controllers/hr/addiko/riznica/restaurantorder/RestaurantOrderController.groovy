package hr.addiko.riznica.restaurantorder

import grails.plugin.grich.registry.controller.GrichRegistryDataController
import grails.plugin.grich.search.command.BaseSearchCommand
import hr.addiko.riznica.core.command.RestaurantOrderCommand

class RestaurantOrderController extends GrichRegistryDataController {

    RestaurantOrderService RestaurantOrderService

    def create(RestaurantOrderCommand cmd) {
        validateCallAndRender(cmd, { RestaurantOrderService.create(cmd) })
    }

    def read() {
        BaseSearchCommand cmd = new BaseSearchCommand()
        cmd.limit = 0
        cmd.start = 0
        validateCallAndRender(cmd, {RestaurantOrderService.read() })
    }
}
