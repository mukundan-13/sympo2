import "./About.css"; // External CSS file

const About = () => {
  const teamData = {
    "Web Development Team": [
      // {
      //   name: "Mohammed Riyaz",
      //   role: "Web Developer",
      //   image: "https://via.placeholder.com/150/ff7f50/fff?text=John",
      // },
      {
        name: "Dhana Sakthivel",
        role: "Web Developer",
        image:"dp.png",
      },
      {
        name: "Asfak Ahamed",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Mukundan",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Mohamed Shajid",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Mohammed Sulthan",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Joshva Patrick",
        role: "Web Developer",
        image: "dp.png",
      },
    ],
    "Graphic Design Team": [
      {
        name: "Infanta",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Monica",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "mohamed apsar",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Abhishek",
        role: "Graphic Design",
        image: "dp.png",
      },
    ],
    "Office Bearers": [
      {
        name: "M.Naveen",
        role: "President",
        image: "dp.png",
      },
      {
        name: "S.Muthaiah",
        role: "Vice President",
        image: "dp.png",
      },
      {
        name: "P.R.Ramesh Bala",
        role: "Secretary",
        image: "dp.png",
      },
      {
        name: "G.Dharani",
        role: "Vice Secretary",
        image: "dp.png",
      },
      {
        name: "A.Kishore Kumar",
        role: "Treasurer",
        image: "dp.png",
      },
    ],
  };
  return (
    <div className="our-team-container container-fluid bg-dark text-white new-con">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Meet Our Technical Team
      </h2>
      <div className="container">
        {Object.entries(teamData).map(([teamName, members]) => (
          <div className="team-section text-center" key={teamName}>
            <h3 className="my-4 neon-text default-cursor">{teamName}</h3>
            <div className="row justify-content-center">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="col-11 col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="team-card card mb-4 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-img-top team-img"
                    />
                    <div className="card-body">
                      <h5 className="card-title team-name">{member.name}</h5>
                      <p className="card-text team-role">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;