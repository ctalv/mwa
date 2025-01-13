import React from "react";
import "../../assets/styles/contact.css";


function Contact() {

    

    return (
        <main>
        <div className="contact-us container">
            <h2>CONTACT US</h2>
            <p>
            If you would like to contact us about a project feel free to fill out the below.
            </p>
            <form id="contact-form" action="send_email.php"  method="post">
                <label for="firstname" className="form-label">First Name</label>
                <input type="text" id="firstname" name="firstname" className="form-control" required/>
                <label for="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname"className="form-control" required/>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" className="form-control" required/>
                <label for="message">Phone</label>
                <input type="phone" id="phone" name="phone" className="form-control" required/>
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="What would you like us to know?" className="form-control" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        </main>
    );
}

export default Contact;