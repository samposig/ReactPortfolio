import React from "react";

const ContactForm = () => {
    return (
        <div class="container">
  <form action="action_page.php">

    <label for="name">Name</label>
    <input type="text" id="name" className="name" placeholder="Your name.."></input>

    <label for="email">Email</label>
    <input type="text" id="email" className="email" placeholder="Your email.."></input>

    <label for="message">Message</label>
    <textarea id="message" ClassName="message" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"></input>

  </form>
</div>
    )
}
export default ContactForm;