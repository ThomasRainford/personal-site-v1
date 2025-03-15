interface Props {
  skill: string;
}

const SkillPill = ({ skill }: Props) => {
  return (
    <div className="flex flex-col items-center mr-3 mb-2 bg-neutral rounded-md p-1">
      <p className="text-secondary font-bold text-sm">{skill}</p>
    </div>
  );
};

export default SkillPill;
