package hr.addiko.riznica.product

import grails.transaction.Transactional
import hr.addiko.riznica.core.command.ProductCommand
// izbciti prazne linije, formatirati kod

@Transactional
class ProductService {

    def create(ProductCommand cmd) {



        Product product = new Product(image:cmd.image)
        product.save()
        [success: true]
    }

    def get() {
        Product p = Product.findById(1)
        [success: true,data: p]
    }
}
