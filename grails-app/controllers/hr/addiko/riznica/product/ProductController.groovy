package hr.addiko.riznica.product

import grails.plugin.grich.search.command.BaseSearchCommand
import hr.addiko.riznica.core.command.ProductCommand

class ProductController {

    ProductService productService


    def create(ProductCommand cmd) {
        validateCallAndRender(cmd, {productService.create(cmd) })
    }
    def get(){
        BaseSearchCommand cmd = new BaseSearchCommand()
        cmd.limit = 0
        cmd.start = 0
        validateCallAndRender(cmd, { productService.get() })
    }
}
