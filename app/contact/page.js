"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoPaperPlane } from "react-icons/io5";
import emailjs from "emailjs-com";

export default function Page() {
  const { register, handleSubmit, reset } = useForm();
  const [popup, setPopup] = useState({ visible: false, success: true });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures the component runs only on the client-side
    setIsClient(true);
  }, []);

  const onSubmit = (data) => {
    const serviceID = "service_u1e9a8v";
    const templateID = "template_cplk93o";
    const publicKey = "McFNSs4nlz5X6bSOt";

    emailjs
      .send(serviceID, templateID, data, publicKey)
      .then(() => {
        setPopup({ visible: true, success: true });
        setTimeout(() => setPopup({ visible: false }), 3000);
        reset(); // Reset form fields
      })
      .catch(() => {
        setPopup({ visible: true, success: false });
        setTimeout(() => setPopup({ visible: false }), 3000);
      });
  };

  // Prevent rendering map and form during SSR
  if (!isClient) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109066.39845038766!2d75.57341924999999!3d31.32239775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720191448626!5m2!1sen!2sin"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                {...register("from_name", {
                  required: "Full name is required",
                })}
                className="form-input"
                placeholder="Full name"
              />
              <input
                type="email"
                {...register("from_email", { required: "Email is required" })}
                className="form-input"
                placeholder="Email address"
              />
            </div>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="form-input"
              placeholder="Your Message"
            ></textarea>
            <button className="form-btn" type="submit">
              <IoPaperPlane />
              <span>Send Message</span>
            </button>
          </form>
        </section>

        {popup.visible && (
          <div
            className="popup"
            style={{
              backgroundColor: popup.success ? "#4caf50" : "#f44336",
            }}
          >
            <p>{popup.success ? "Message Sent!" : "Failed to Send Message!"}</p>
          </div>
        )}
      </article>

      <style jsx>{`
        .popup {
          position: fixed;
          bottom: 20px;
          right: 20px;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 1000;
        }
        .popup p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
