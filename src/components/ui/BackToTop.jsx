import { useBackToTop } from '../../hooks/useBackToTop';

export default function BackToTop() {
  const { visible, scrollToTop } = useBackToTop();

  return (
    <button
      id="back-to-top"
      className={visible ? 'visible' : ''}
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
