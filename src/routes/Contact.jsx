import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="opener">
                <h3>Got any questions?</h3>
                <h1>Shoot Me a Message!</h1>
            </div>
            <div className="formsContainer">
                <form className="formsInputs" action="action_page.php">

                    <label for='fname'></label>
                    <input type='text' id='fname' name="firstname" placeholder="First Name"/>

                    <label for='lname'></label>
                    <input type='text' id='lname' name='lastname' placeholder="Last Name"/>

                    <label for='email'></label>
                    <input type="email" id="email" name="email" placeholder="Email"/>

                    <label for="message"></label>
                    <textarea id="message" name="message" placeholder="Type your message here! (2000 characters max)" maxLength="2000"></textarea>

                    <input type="submit" value="SUBMIT"/>

                </form>

            </div>
            <div className="socmedContainer">
                <h4>or check out my social media:</h4>
                <div className="socmedIcons">
                    <a href="https://www.facebook.com/afiq.khairir.50" target="_blank" class="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/afiqcaptures/" target="_blank" class="fa fa-instagram"></a>
                    <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=afiqk@bu.edu&tf=1" target="_blank"class="fa fa-google"></a>
                </div>
            </div>
            
        </div>
    )
}

export default Contact