import "../styles/contactpage.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="e2e_contact_container">

      <section className="e2e_contact_header">

        <h1>Contact Us</h1>

        <p>
          We are here to answer your questions and
          help your business grow.
        </p>

      </section>

      <section className="e2e_contact_wrapper">

        <div className="e2e_contact_info">

          <div className="e2e_contact_card">
            <FaPhoneAlt />
            <h3>Phone</h3>
            <p>+1-847-960-4204</p>
          </div>

          <div className="e2e_contact_card">
            <FaEnvelope />
            <h3>Email</h3>
            <p>hr_ind@beedatatech.com</p>
          </div>

          <div className="e2e_contact_card">
            <FaMapMarkerAlt />
            <h3>Location</h3>
            <p>
              Madhurawada,
              Visakhapatnam
            </p>
          </div>

        </div>

        <form className="e2e_contact_form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      <section className="e2e_contact_map">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=visakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />

      </section>

    </div>
  );
}

export default ContactPage;