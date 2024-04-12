type PageSectionProps = {
  children: React.ReactNode;
};

export const PageSection = ({ children }: PageSectionProps) => {
  return <div className="container py-10">{children}</div>;
};
