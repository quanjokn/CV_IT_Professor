import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section
        className="bg-primary text-white py-5 position-relative"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-6">
              <h1 className="display-2 fw-bold mb-4">Welcome to Our Project</h1>
              <p className="lead mb-4">
                We're building something amazing that will revolutionize the way
                you work.
              </p>
              <button className="btn btn-light btn-lg px-4 me-2">
                Get Started
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                Learn More
              </button>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="text-center">
                <i className="bi bi-code-square display-1 mb-4"></i>
                <div className="position-relative">
                  <div className="bg-white p-4 rounded-3 shadow-lg">
                    <h3 className="text-primary">Project Features</h3>
                    <ul className="list-unstyled text-dark">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Modern Technology Stack
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Responsive Design
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        User-Friendly Interface
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12" data-aos="fade-up">
              <h2 className="display-4 fw-bold">Our Features</h2>
              <p className="lead text-muted">
                Discover what makes our project special
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-lightning-charge-fill text-primary display-4 mb-3"></i>
                  <h4 className="card-title mb-3">Fast Performance</h4>
                  <p className="card-text text-muted">
                    Lightning-fast performance optimized for the best user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-shield-check text-primary display-4 mb-3"></i>
                  <h4 className="card-title mb-3">Secure & Reliable</h4>
                  <p className="card-text text-muted">
                    Built with security in mind to protect your data and
                    privacy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-gear-wide-connected text-primary display-4 mb-3"></i>
                  <h4 className="card-title mb-3">Easy Integration</h4>
                  <p className="card-text text-muted">
                    Seamlessly integrate with your existing systems and
                    workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <h2 className="display-4 fw-bold mb-3">Ready to Get Started?</h2>
              <p className="lead mb-0">
                Join us today and experience the future of technology.
              </p>
            </div>
            <div
              className="col-lg-4 text-lg-end mt-4 mt-lg-0"
              data-aos="fade-left"
            >
              <button className="btn btn-light btn-lg px-4">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
