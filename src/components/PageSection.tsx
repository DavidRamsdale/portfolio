type PageSectionProps = {
  children: React.ReactNode;
};

export const PageSection = ({ children }: PageSectionProps) => {
  return <div className="container pt-[85px] pb-[70px]">{children}</div>;
};
