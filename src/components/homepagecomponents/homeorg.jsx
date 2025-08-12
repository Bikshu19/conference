import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: "/Nri.jpg",
      title: "NRI Institute of Technology(Autonomous)",
      department: "Department of Computer Science and Engineering",
      accreditation:
        "Approved by AICTE | Affiliated by JNTU, Kakinada | NBA Accredited (2nd Cycle) | NAAC Accredited | Agiripalli | Vijayawada | AP - India",
    },
    {
      id: 2,
      img: "/pb.jpg",
      title:
        "Parvathaneni Brahmayya Siddhartha College of Arts & Science(Autonomous)",
      department: "Department of Computer Science Post-Graduate Centre",
      accreditation: "Moghalraja Puram | Vijayawada | AP - India",
    },
  ];

  return (
    <section
      className="py-5 text-secondary "
      style={{ transform: "translateX(30px)" }} // Slightly move to the right
    >
      <div className="container text-center">
        {/* Main Heading */}
        <h2 className="mb-5 fw-bold" style={{ color: '#141E46' }}>Organized By</h2>

        <div className="row justify-content-center g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-5 d-flex m-3">
              <div className="card h-100 shadow-sm border-0 rounded-3 w-100 text-center">
                <img
                  src={blog.img}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  {/* College Name */}
                  <h5 className="card-title mb-2 fw-semibold">{blog.title}</h5>
                  {/* Department */}
                  <h6 className="mb-2 fw-bold" style={{ color: '#141E46' }}>
                    {blog.department}
                  </h6>
                  {/* Accreditation Info */}
                  <p className="card-text small mb-3" style={{ color: '#141E46' }}>
                    {blog.accreditation}
                  </p>
                  {/* Learn More */}
                  <a
  href="#"
  className="btn btn-primary fw-semibold mt-auto d-inline-flex align-items-center gap-2"
  style={{ backgroundColor: '#141E46', borderColor: '#141E46' }}
>
  Explore More
  <i className="bi bi-arrow-right" style={{ color: '#ffffff', fontSize: '1rem' }}></i>
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
