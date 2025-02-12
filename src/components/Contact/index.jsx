import "./index.css";

const ContactUs = () => {
  return (
    <div className="con container-fluid py-5 bg-dark text-white min-vh-100 w-100">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Contact Us
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4 contact-list w-100">
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Naveen</h3>
          <p className="contact-info">Phone: +91 93426 29920</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">M.Naveen</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">S.Muthaiah</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">P.R.Ramesh Bala</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Kishore</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Kishore</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Kishore</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Kishore</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Kishore</h3>
          <p className="contact-info">Phone: 9876543210</p>
        </div>
      </div>

      <div className="contact-footer w-100">
        <p>We are here to assist you. Feel free to reach out!</p>
      </div>
    </div>
  );
};

export default ContactUs;