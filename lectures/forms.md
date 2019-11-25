<!-- Forms
All the code we’ve been writing so far has been using just HTML and
CSS, two parts of the “front-end” of the web. Earlier in the guide, we
talked about web sites being like restaurants, where the “front-end”
waiters take a customer’s order and send it to the “back-end” cooks
to prepare.
So far we’ve only talked about the front-end of the site. Now let’s talk
about the back-end.
On the web, there are just two ways of getting around web pages. The
first is by clicking on a link to go to another page. The second is by
letting your users enter data into a form. The front-end of our web sites
take the data and passes it to the back-end, just like a waiter would pass
a customer’s order to the kitchen and what is cooked is dependent on
that order.

The waiters don’t so much care about the preparation of customers’
meals, they’re just messengers who ensure the right food is delivered to
the table.
Similarly the front-end of your website doesn’t care about the data as
it’s the back-end’s job to process the data, store it, delete it if needed,
send emails, charge credit cards and so on. Then, once it’s finished, to
tell the user what next page or message they should see.
For instance, let’s say we want to log into a web site. How does this
work technically? Our front-end lets a user type a username and
Chapter 11 255
password into two different input fields on a log in page. There will be a submit button underneath that a user will click. The front-end will then pass the user’s data to the back-end.
The back-end will take the username and look in its database for a match. If there is one, and the password matches, it tells the front-end that the user is correct and any new information will be added to that user’s account on the web site. If there isn’t a match for the username or the password, it tells the user there was an error logging them in — essentially the front-end will tell the user that the back-end couldn’t log them in, just like a cook telling a waiter to inform a hungry customer they’re out of the chicken soup.
The form tag
On some web pages, there may be multiple ways to process data. There could be a sign up form, a log in form and a forgotten password form all on one page. We want each one of our options to be processed in completely separate ways — we need some place for our data in each circumstance to go to be processed.
Let’s focus on our log in form. We’re going to pretend there is a URL that will process any data for us on a page called “login.html”. Usually if we go to the web page in our browser, either by typing it in or clicking a link to the page, we are “getting” the page. However, if we are submitting a form, we are “posting” data to the page.

Our form takes two attributes: what page we’re going to next and how
we’re submitting the data. Most of the time we’ll be “posting” data:
<form action="login.html" method="post">
</form>
If we don’t want to “post” data and instead use the method “get”, all
of our user’s data will be in the next page’s address bar, which is bad
for security.

Input tags
The next tag we need to add is our user’s username input field. We need
to introduce a new tag called the input tag. There are a few types of
input tag that we’ll cover, but the first one is plain old text input.
Inputs take the name of the data they contain. Just like HTML classes,
the name of the field is dependent on us and the back-end — if the
back-end expects it to be “username” data and not “email” data, then
we need to match accordingly:
<form action="login.html" method="post">
<input type="text" name="username">
</form>

Notice that the input tag is a single tag, as no other tag will ever go inside it. You can’t put a header or a link inside an input, right?
Password fields
So we have our username, next we need our password. This is still an input tag, but with a different type, so the browser knows to conceal this data from prying eyes:
<form action="login.html" method="post">
<input type="text" name="username">
<input type="password" name="password">
</form>

Here the type of the input field is “password”, but coincedentially the data’s name is going to be “password” too. On a sign up field we may have “password” data and “password-confirmation” data — both would be the type “password” though:
<form action="signup.html" method="post">
<input type="text" name="username">
<input type="password" name="password">
<input type="password" name="password-confirmation">
</form>

How do we submit?
At the moment, we have our input fields where users can fill out data,
but no way to submit the form. Technically, our users could press
“return” on the keyboard, but it would be nice to have something to
click on too.
Weirdly, another input field is the submit type, which turns into a
button. A user can’t input any text but, technically, they’re inputting
that they’ve finished added data.
We’re going to add one more attribute, which is the “value” attribute.
This give any input (not just the submit type) default text:
<form action="login.html" method="post">
<input type="text" name="username">
<input type="password" name="password">
<input type="submit" value="Log in">
</form>

Other “text” types
There are some specialized versions of the text input field that on a
laptop or desktop computer look the same, however for a touch-screen
it will give our users a different specialized keyboard. For instance, if
we have a telephone number to type in, it’s fine if we have a physical
Chapter 11 259
keyboard, but on a touch-screen keyboard, we might as well just use the number keys, so we can use:
<input type="tel" name="home-phone">

If we have an email address, we can use:
<input type="email" name="email-address">
If we just have a number, we can use:
<input type="number" name="quantity">
If we want to add the “.com” key to be able to quickly add a URL in our input field, we can use:
<input type="url" name="twitter-profile">
Labelling our

inputs
At the moment, it’s hard for our users to know which each input field is which — is that an email field, is that a password, is that a username field? We need to let our users know what’s going on!
To do this, we can use the label tag to wrap around our inputs:
260 Learn to Code Now
<form action="login.html" method="post">
<label>
Username
<input type="text" name="username">
</label>
<label>
Password
<input type="password" name="password">
</label>
<input type="submit" value="Log in">
</form>
This also gives users the benefit of when they click on the text for the
input field, our text cursor will automatically move to that field.
Sometimes we might have our label and our input apart, but we can
still connect them by using “for” on our label and “id” on our input:
<label for="username">Password</label>
<input type="text" name="username" id="username">
Larger text inputs
Most input tags can only handle up to 255 characters of text — slightly
less than two tweets — but what happens if we want to add 256
Chapter 11 261
characters, or 20,000 characters? Or 20,000 words? We have to use a different tag called the textarea tag.
Let’s say we have a create new blog post form. We might have the title of the blog post. Usually that would be less than 255 characters, but the body of the blog post would be more than that. We’d keep the title as a text input field, but for the body of the post, we’d use a textarea tag:
<form action="newpost.html" method="post">
<label>
Post title
<input type="text" name="title">
</label>
<label>
Post entry
<textarea name="body"></textarea>
</label>
<input type="submit" value="Create new post">
</form>
You may have noticed that unlike input tags, which don’t have closing tags, the textarea tag does. Why? textarea tags can contain multiple lines of text, whereas input tags cannot. Technically no other tag can go inside the textarea, but we can put many return/enter characters in there to separate lines of text.

inputs
At the moment, it’s hard for our users to know which each input field is which — is that an email field, is that a password, is that a username field? We need to let our users know what’s going on!
To do this, we can use the label tag to wrap around our inputs:
260 Learn to Code Now
<form action="login.html" method="post">
<label>
Username
<input type="text" name="username">
</label>
<label>
Password
<input type="password" name="password">
</label>
<input type="submit" value="Log in">
</form>
This also gives users the benefit of when they click on the text for the
input field, our text cursor will automatically move to that field.
Sometimes we might have our label and our input apart, but we can
still connect them by using “for” on our label and “id” on our input:
<label for="username">Password</label>
<input type="text" name="username" id="username">
Larger text inputs
Most input tags can only handle up to 255 characters of text — slightly
less than two tweets — but what happens if we want to add 256
Chapter 11 261
characters, or 20,000 characters? Or 20,000 words? We have to use a different tag called the textarea tag.
Let’s say we have a create new blog post form. We might have the title of the blog post. Usually that would be less than 255 characters, but the body of the blog post would be more than that. We’d keep the title as a text input field, but for the body of the post, we’d use a textarea tag:
<form action="newpost.html" method="post">
<label>
Post title
<input type="text" name="title">
</label>
<label>
Post entry
<textarea name="body"></textarea>
</label>
<input type="submit" value="Create new post">
</form>
You may have noticed that unlike input tags, which don’t have closing tags, the textarea tag does. Why? textarea tags can contain multiple lines of text, whereas input tags cannot. Technically no other tag can go inside the textarea, but we can put many return/enter characters in there to separate lines of text.



We can also preselect one of the radio buttons using the word checked,
just like with check boxes:
<input type="radio" name="breakfast" value="Continental"
checked>
File uploads
One last input type we can have is for letting our users upload files
from their phone or computer to the back-end of our website, for
instance if we want them to add an image to their profile, or if you
want them to upload a music file of their hottest new jam.
For uploads, we need to introduce two new things. The first is an input
field with the type “file”:
<input type="file" name="photo">
The second thing we need to talk about is the form tag itself. By default,
form tags are good for submitting text information to the back-end of
our website, but they’re not so great at handling both text and file data
unless we say we want to handle both types of data.
To tell the whole form to control both text and files, we can add a new
attribute to our form tag called the “enctype” (short for “encryption
type”, just like “src” is short for “source”). The particular encryption type
Chapter 11 267
we need is a “multipart form data” type — essentially multiple parts to the form, text and files.
You don’t have to remember this — this is something I regularly Google:
<form action="upload.html" method="post" enctype="multipart/form-data">
<label>
<input type="file" name="profile-pic">
</label>
<input type="submit" value="Upload new profile photo">
</form>
Phew, it makes the form tag quite long, but without the encryption type, any files uploaded won’t get added.
Styling inputs
Once we’re happy with our form’s content in HTML, we want to start styling it up to make it easier for our users to interact with.
Just like with any tag, we can select them directly, such as:
268 Learn to Code Now
input {
color: #000000;
}
select {
width: 200px;
}
However, with so many different input types, how can we control
all them when our check boxes look vastly different to our email
input boxes?
The first option would be to add classes on our input tags. This works
very well, but we would have to go back through our HTML and add
the attributes in there.
Another way is to use the name of the attribute itself to select all the
tags with the same type. To do this, let’s say we want to just select all
the inputs, then filter them for all the type attributes that are “email”:
input[type=email] {
width: 250px;
}
This selector looks for all the input tags first, then using the square
brackets, finds any type attribute exactly equal to “email”. We can use
this selector in lots of different types too:
Chapter 11 269
input[type=email] {
width: 250px;
}
input[type=file] {
width: 100px;
}
We could also combine these with classes:
input[type=email].newsletter {
width: 400px;
}
This would pick any input tag, then filter by the type of email, then filter by the class of “newsletter”. It would need to match both to style!

Placeholders
In a lot of instances we might want to add a suggestion about what to put into the input tag. For instance, on an email address field we might want to suggest a fake email address so it’s more obvious what to put in there. We use a placeholder attribute to make that suggestion:
<input type="email" name="email" placeholder="rik@superhi.com">
270 Learn to Code Now
Placeholders work on pretty much all the input tag types. To style up
the placeholder text itself, we have to use a weird bit of CSS styling.
Let’s say we want the user’s text to be in black text color, but the
placeholder in grey:

input {
color: #000000;
}
input::placeholder {
color: #999999;
}
The “::placeholder” is a bit like a state (e.g. a hover state), but more to
do with the actual internals of the tag rather than the user interaction.
This could also combine with the type selector:
input[type=email]::placeholder {
color: #cccccc;
}

Errors and validation
There are a few more extra attributes we can add into our input tag’s
HTML to add some checks to make sure we can require or validate.
Chapter 11 271
We can add in the “required” attribute to check whether the input field is filled in or not:
<input type="text" name="username" required>
The browser will check when a form is submitted that this field is required, and if it isn’t, it will let the user know.

There’s one big downside of using the required attribute — it’s not yet fully supported in some browsers, such as Safari and older versions of Internet Explorer. How do we make sure the data is filled in?
Technically, the front-end shouldn’t care about data that is or isn’t filled in. The front-end is just the delivery system between the user and the back-end of the web site.
Let’s go back to our restaurant analogy. Say we have two waiters, one who knows that the soup has run out and the other who doesn’t. What would happen if a user orders the soup from the waiter who doesn’t know it has run out? The waiter would go to the kitchen and the chef would say, “oh the soup has ran out, they’ll have to have something else”. Then the waiter would go back to the customer and suggest ordering an alternative.
The waiter who knew the soup had run out wouldn’t need to do the trip to the kitchen and would ask for a different order there and then. Even if she or he forgot, the last line of defense is still the chef, in the kitchen, with no soup.

In our web site, the back-end is the place that tells our users the field
should be required. It’s a nice thing to tell the front-end that the field
is required, but when some browsers don’t support it, we can’t rely on
that. Expect that field to be optional in some circumstances, even if it
says required, and have a back-up!
 -->
