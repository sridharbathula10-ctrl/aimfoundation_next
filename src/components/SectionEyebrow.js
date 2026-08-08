export default function SectionEyebrow({ children, className = "" }) {
  return (
    <p className={`section-eyebrow ${className}`.trim()}>
      {children}
    </p>
  );
}
