interface Props {
  skill: string;
}

const SkillPill = ({ skill }: Props) => {
  return <div className="badge badge-soft badge-accent font-bold">{skill}</div>;
};

export default SkillPill;
