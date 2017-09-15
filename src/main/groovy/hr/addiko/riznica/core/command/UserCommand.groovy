package hr.addiko.riznica.core.command

import grails.validation.Validateable

class UserCommand implements Validateable{
    Long id
    String username
    String password


    static constraints ={
        username nullable:true
        password nullable: true
        id nullable: true
    }
}
