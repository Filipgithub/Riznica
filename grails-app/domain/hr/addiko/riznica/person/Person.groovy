package hr.addiko.riznica.person

class Person {

    Long id
    String name
    String password

    static constraints = {
        name blank: false
        password blank: false
    }
}
