type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={`bg-secondary mb-2 p-4 rounded-lg shadow ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
