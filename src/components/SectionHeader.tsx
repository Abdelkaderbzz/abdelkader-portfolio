import { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

const SectionHeader = ({
  index,
  label,
  title,
  description,
  className = '',
}: SectionHeaderProps) => (
  <div className={`mb-14 md:mb-20 max-w-3xl ${className}`}>
    <div className="flex items-center gap-3 mb-6">
      <span className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="mx-2 text-muted-foreground/40">/</span>
        {label}
      </span>
    </div>
    <h2 className="display-title text-4xl md:text-5xl lg:text-6xl">{title}</h2>
    {description && (
      <p className="text-body mt-6 max-w-xl">{description}</p>
    )}
  </div>
);

export default SectionHeader;
