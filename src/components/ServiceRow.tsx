import type { Business, Service } from '@profitstudio/booking-engine';
import { durationLabel, priceLabel } from '../lib/format';

interface ServiceRowProps {
  service: Service;
  business: Business;
  /** Present while online booking is on: the whole row opens booking for this service. */
  onBook?: (serviceId: string) => void;
}

/**
 * One line of the menu: the name in italic serif, duration and price in mono
 * credits, the owner's description, and — when booking is on — the whole row
 * is the way into this service's open times.
 */
export function ServiceRow({ service, business, onBook }: ServiceRowProps) {
  const price = priceLabel(service, business.locale);
  const duration = durationLabel(service.durationMinutes);
  const body = (
    <>
      <span className="svc__name">{service.name}</span>
      <span className="svc__price">{price}</span>
      <span className="svc__meta">{duration}</span>
      {onBook ? (
        <span className="svc__go" aria-hidden="true">
          See times <span className="svc__arrow">→</span>
        </span>
      ) : null}
      {service.description ? <span className="svc__desc">{service.description}</span> : null}
    </>
  );
  return (
    <li className="svc">
      {onBook ? (
        <button type="button" className="svc__row" aria-label={`Book ${service.name}, ${duration}, ${price}`} onClick={() => onBook(service.id)}>
          {body}
        </button>
      ) : (
        <div className="svc__row">{body}</div>
      )}
    </li>
  );
}
