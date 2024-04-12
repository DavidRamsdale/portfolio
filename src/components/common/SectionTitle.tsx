type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="text-4xl font-semibold pb-4">{title}</h2>;
};

export default SectionTitle;
