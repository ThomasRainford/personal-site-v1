interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="divider divider-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
