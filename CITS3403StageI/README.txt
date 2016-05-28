/ * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *      
*                                                                                                                   *   
*                                                       BIP!                                                        *     
*                                                                                                                   *
*                                               by Michael Stewart                                                  *
*                                                    20947715                                                       *
*                                                                                                                   *
*                                                   README.txt                                                      *
*                                                                                                                   *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * /




1: Rationale

I constructed BIP! from scratch with the intention of creating a user-friendly, visually-appealing microblogging site.
Everything was designed to be as simple as I could make it. A user may navigate throughout the whole site using the
easily-accessible navigation box on the left, or using the navigation bar lining the top of the page.

At present, the pages submitted are templates that represent the final outcome of the site to be submitted in for
Project Stage 2. Every variable used throughout the site (such as post count, follower count, and followers) are
just templates. Once the website has a database behind it, the site will actually be functional.

Navigation is available through a navigation box on the left of the screen. It is currently in a fixed position in
the browser window but I suspect that once I add pagination in Ruby on Rails the pages won't be very long and I'll
make the position of the box absolute rather than fixed.



2: Project Directory

The layout of the project directory is as follows:

  .                             contains all of the html files
  ./css                         contains the CSS files used throughout the website
  ./font-awesome-4.0.3          font awesome, incl. for its scalable icons. http://fortawesome.github.io/Font-Awesome/
  ./images                      contains all images used in the website
  ./images/avatars              user's avatars
  ./images/backgrounds          the page backgrounds
  ./images/icons                contains some icons used throughout the website
  ./images/logos                contains the site logo
  ./images/post_attachments     images used in user's posts
  ./javascript                  contains the javascript used in the site (there isn't much, though)



3: Pages in the Site

The pages included in the site, along with their description, and forms they contain:

  ./home.html                   The home page, where someone who is not logged in will be directed to
  ./log_in.html                 The log in page
                                  contains a form to validate that the username is not blank
                                  contains a form to validate that the password is greater than 5 characters long
  ./sign_up.html                The sign up page, to create an account
                                  contains a form to validate that the username is not blank
                                  contains a form to validate that the password is greater than 5 characters long
                                  contains a form to validate that the email address is valid
  ./my_page.html                The user's page, where they can post things
  ./new_post.html               A page with a form for creating a new post
                                  contains a form that validates whether the user has entered a title
                                  contains a javascript function to determine how many characters the user may
                                   enter
  ./edit_post.html              A page with a form to edit a post
                                  contains a form that validates whether the user has entered a title
                                  contains a javascript function to determine how many characters the user may
                                   enter
  ./followers.html              A list of the user's followers
  ./about_me.html               A page containing a form for changing the user's blog description and avatar
                                  contains a text area, and a file input
                                  contains a javascript function to determine how many characters the user may
                                   enter
  ./online_posts.html           A list of all posts online, from any user
  ./followed_blogs.html         A list of posts from blogs the user has followed  
  ./manage_followed.html        A list of blogs the user is following
  ./sample_user_page.html       A sample page for another user
  ./unfollow_confirmation.html  A confirmation page the user is redirected to upon clicking the 'unfollow' button
  ./about.html                  A simple page with information about the website, including references
  ./RSS.xml                     A very simple xml file that will be used for the RSS feed in the future
  ./README.txt                  This text file
	


4. CSS Files

The CSS files included in this project (that I wrote):

  ./css/bip_stylesheet.css      Stylesheet used in every page
  ./css/bip_stylesheet_home.css Used in home.html, log_in.html, and sign_up.html



5. CSS Validation

Unfortunately some of the CSS is (according to the CSS validator I've linked to on every page) invalid. This invalid
CSS, however, is only the font-awesome css, which I didn't write. I haven't modified the font-awesome css in any way.

I have validated my own CSS via the same validator (http://jigsaw.w3.org/css-validator/validator) and my stylesheets
(bip_stylesheet.css and bip_stylesheet_home.css) are both valid CSS3.



Please read through 'About BIP!/References' (about.html) for more information.
