package hr.addiko.riznica.comment

import grails.plugin.grich.core.util.HibernateUtils
import grails.plugin.springsecurity.SpringSecurityService
import grails.transaction.Transactional
import hr.addiko.riznica.User
import hr.addiko.riznica.core.command.CommentCommand
import hr.addiko.riznica.post.Post

import java.text.SimpleDateFormat

@Transactional
class CommentService {

  SpringSecurityService springSecurityService


  def readAll() {


    def result = Comment.findAll()

    HibernateUtils.initialize(result)

    [success: true, data: result]
  }

  def listByPostId(CommentCommand cmd) {
    // User u = (User)springSecurityService.getCurrentUser()

    def result = Comment.createCriteria().list {
      or {
        eq("post.id", cmd.postId)
// eq("user",User.findById(u.id))
      }
    }

    [success: true, data: result]
  }

  def create(CommentCommand cmd) {
    User u = (User) springSecurityService.getCurrentUser()
    String pattern = "dd.MM.yyyy HH:mm:ss"
    SimpleDateFormat format = new SimpleDateFormat(pattern)
    String sdf = format.format(new Date())


    Comment comment = new Comment(
      author: u.username,
      comment: cmd.comment,
      user: u,
      post: Post.findById(cmd.post.id),
      simpleDate: sdf.split(" ")[0],
      simpleTime: sdf.split(" ")[1])
    comment.save()
    [success: true]
  }


  def update(CommentCommand cmd) {


    Comment.executeUpdate(
      "UPDATE Comment p SET " +
        "p.author=:newCommentAuthor, p.comment=:newComment, p.user=:newUser, p.post=:newPost" +
        "WHERE p.id=:id",
      [newCommentAtuhor: cmd.author, newComment: cmd.comment, newUser: cmd.user, newPost: cmd.post, id: cmd.id]
    )


    [success: true]
  }

  def delete(CommentCommand cmd) {

    Post.findById(cmd.id).delete()

    [success: true]
  }

}
