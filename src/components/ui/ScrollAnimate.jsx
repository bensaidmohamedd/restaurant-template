import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ScrollAnimate({
  children,
  animation = 'fade-up',
  delay,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useScrollAnimation();
  const style = delay !== undefined ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll ${animation} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
