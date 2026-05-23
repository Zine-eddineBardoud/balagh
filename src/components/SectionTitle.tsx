interface SectionTitleProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function SectionTitle({ children, action }: SectionTitleProps) {
  return (
    <div className="mb-3 flex items-end justify-between gap-2">
      <h2 className="font-heading text-base tracking-wide text-dark">{children}</h2>
      {action}
    </div>
  );
}
