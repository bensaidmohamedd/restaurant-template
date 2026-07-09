import Icon from './Icon';

export default function Stars({ count = 5 }) {
  return (
    <div className="review-stars mb-3" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="icon-star" />
      ))}
    </div>
  );
}
