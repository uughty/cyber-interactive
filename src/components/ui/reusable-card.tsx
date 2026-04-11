// src/components/ui/reusable-card.tsx
export const ReusableCard = ({ children, className }: any) => (
  <div className={`rounded-2xl border p-6 ${className}`}>{children}</div>
);

export const ReusableCardHeader = ({ children }: any) => (
  <div className="mb-4">{children}</div>
);

export const ReusableCardTitle = ({ children, className }: any) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

export const ReusableCardContent = ({ children, className }: any) => (
  <div className={className}>{children}</div>
);
