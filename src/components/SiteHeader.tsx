import { OFFLINE_CTA, useBookingIntent } from '../lib/booking-intent';
import { useContent } from '../lib/content';
import { plainText } from '../lib/emphasis';
import { Wordmark } from './Wordmark';

/** Sticky over the dark ground: the name in italic serif, quiet links, and Book at every width. */
export function SiteHeader() {
  const { values } = useContent();
  const { startBooking, online } = useBookingIntent();
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Back to the top">
          <Wordmark />
        </a>
        <nav className="site-nav" aria-label="Sections">
          <ul>
            <li>
              <a href="#menu">{plainText(values['menu.title'])}</a>
            </li>
            <li>
              <a href="#shop">{plainText(values['shop.title'])}</a>
            </li>
            <li>
              <a href="#barbers">{plainText(values['team.title'])}</a>
            </li>
            <li>
              <a href="#visit">{plainText(values['visit.title'])}</a>
            </li>
          </ul>
        </nav>
        <a
          className="btn btn--primary btn--small site-header__cta"
          href="#book"
          onClick={(event) => {
            event.preventDefault();
            startBooking();
          }}
        >
          {online ? 'Book' : OFFLINE_CTA}
        </a>
      </div>
    </header>
  );
}
