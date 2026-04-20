function CircleProgress({ percent }) {
  const radius = 50;
  const stroke = 4; 
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <div style={{ width: 110, height: 110, margin: "auto" }}>
      <svg height={110} width={110}>

        {/* Background */}
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="55"
          cy="55"
        />

        {/* Progress */}
        <circle
          stroke="#15caf3"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1.5s ease",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
          r={normalizedRadius}
          cx="55"
          cy="55"
        />

        {/* Text */}
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}

function Skills() {
  const technicalSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 75 },
    { name: "React.js", level: 75 },
    { name:"MongoDB", level:80},
    { name:"Node.js", level:75},
  ];

  const professionalSkills = [
    { name: "Creativity", level: 90 },
    { name: "Communication", level: 65 },
    { name: "Problem Solving", level: 75 },
    { name: "Teamwork", level: 85 },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>

        <div className="row">

          <div className="col-md-6 ps-5">
            <h4 className="text-center mb-4">Technical Skills</h4>

            {technicalSkills.map((skill, i) => (
              <div key={i} className="mb-4">

                {/* Name + % */}
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                {/* Thin line */}
                <div className="thin-line">
                  <div
                    className="thin-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

          <div className="col-md-6">
            <h4 className="text-center mb-4">Professional Skills</h4>

            <div className="row">
              {professionalSkills.map((skill, i) => (
                <div className="col-6 text-center mb-4" key={i}>
                  
                  <CircleProgress percent={skill.level} />

                  <p className="mt-2">{skill.name}</p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;