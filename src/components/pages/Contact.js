import React from "react";
import "../../assets/styles/contact.css";
import riceBlvd from "../../assets/images/Warren.jpg"
// import contactImage from "../../assets/images/projects/RSF/IMG_6924.jpeg"
import contactImage from "../../assets/images/team-photo.jpg"

function Contact() {



    return (
        <main>
            <div className="contact-us-page container color-contact">
                <div className="row">
                    {/* <div className="col-4">
                        <img className="contact-us-img" src={contactImage}
                        />
                    </div> */}

                    {/* <div className="contact-us col-8"> */}
                    <div className="contact-us">
                        <h2 className="header">CONTACT US</h2>
                        <div className="">
                        <img className="contact-us-img" src={contactImage}
                        />
                    </div>
                        <p>
                            If you would like to contact us about a project feel free to fill out the below.
                        </p>
                        <form id="contact-form" action="send_email.php" method="post">
                            <label for="firstname" className="form-label">First Name</label>
                            <input type="text" id="firstname" name="firstname" className="form-control" required />
                            <label for="lastname">Last Name</label>
                            <input type="text" id="lastname" name="lastname" className="form-control" required />
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" required />
                            <label for="message">Phone</label>
                            <input type="phone" id="phone" name="phone" className="form-control" required />
                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="What would you like us to know?" className="form-control" required></textarea>
                            <button className="myButton" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Side by side image and contact us

export default Contact;