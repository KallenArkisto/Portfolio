import skills from '../data/skills';

function Skills() {
  return (
    skills.map((skill) => (
      <div className="expertise-item" data-aos="zoom-in" data-aos-delay="400" key={skill.id}>
        <div className="expertise-icon"><i className={skill.icon}></i></div>
        <div className="expertise-content">
          <h4>{skill.name}</h4>
          <p>{skill.description}</p>
        </div>
      </div>
    ))
  );
}
export default Skills;