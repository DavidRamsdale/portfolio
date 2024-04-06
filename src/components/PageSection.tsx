type PageSectionProps = {
  children: React.ReactNode;
};

export const PageSection = ({ children }: PageSectionProps) => {
  return <div className="pt-[66px] px-6">{children}</div>;
};
