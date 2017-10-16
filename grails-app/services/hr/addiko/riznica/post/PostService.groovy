package hr.addiko.riznica.post

import grails.plugin.grich.core.util.HibernateUtils
import grails.plugin.springsecurity.SpringSecurityService
import grails.transaction.Transactional
import hr.addiko.riznica.User
import hr.addiko.riznica.core.command.PostCommand
import hr.addiko.riznica.category.Category

// formatirati kod, izbaciti importe koje se ne koriste, izbaciti suvisne prazne linije, izbaciti komentare koji ne sluze nicemu
@Transactional
class PostService {

  SpringSecurityService springSecurityService

  def readAll(PostCommand cmd) {

    //return result of search,if search is empty return all
    def result = Post.createCriteria().list {
      if (cmd.categoryName) {
        'in'("category", Category.findAllByNameIlike("%${cmd.categoryName}%"))
      }
      if (cmd.postTitle) {
        ilike("postTitle", "%${cmd.postTitle}%")
      }
      if (cmd.userName) {
        'in'("user", User.findAllByUsernameIlike("%${cmd.userName}%"))
      }
    }



    [success: true, data: result]

  }

  def create(PostCommand cmd) {

    User u = (User) springSecurityService.getCurrentUser()


    Post post = new Post(user: u, postTitle: cmd.postTitle,
      postContent: cmd.postContent, category: Category.findById(cmd.postCategory.id), userName: u.username,
      categoryName: Category.findById(cmd.postCategory.id).name)
    post.save()
    [success: true]
  }

//    def update(PostCommand cmd){
//// def per = Person.get(cmd.id)
//// per.name = cmd.name
//// per.email = cmd.email
//// per.phone = cmd.phone
//// per.save(flush: true)
//
//
//        Post.executeUpdate(
//                "UPDATE Post p SET " +
//                        "p.postAuthor=:newPostAuthor, p.postTitle=:newPostTitle, p.postContent=:newPostContent,p.postCategory=:newPostCategory"+
//                        "WHERE p.id=:id",
//                [newPostAtuhor:cmd.postAuthor, newPostTitle:cmd.postTitle, newPostContent:cmd.postContent
//                        ,newPostCategory:cmd.postCategory,id:cmd.id,newcategoryName]
//        )
//
//
//        [success: true]
//    }

  def delete(PostCommand cmd) {

    Post.findById(cmd.id).delete()

    [success: true]
  }


}
