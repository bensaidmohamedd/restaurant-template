import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function SectionHeader({ label, title, description, className = '', mb = 'mb-16' }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`text-center ${mb} animate-on-scroll fade-up ${className}`}>
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title font-display mb-4">{title}</h2>
      <div className="gold-line mx-auto mb-6" />
      {description && <p className="text-gray-500 max-w-lg mx-auto">{description}</p>}
    </div>
  );
}
