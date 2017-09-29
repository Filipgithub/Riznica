package hr.addiko.riznica.product


class Product {

    Long id
//    String title
//    String description
//    Float price
    String image

    static constraints = {
//        title nullable: true//, blank: false
//        description nullable: true//, blank: false
//        price nullable: true//, blank: false
        image (blank: true, nullable:true, maxSize:1073741824)
    }
}
