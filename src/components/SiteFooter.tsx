import { OFFLINE_CTA, useBookingIntent } from '../lib/booking-intent';
import { useContent } from '../lib/content';
import { telHref } from '../lib/format';
import { useSiteData } from '../lib/site-data';
import { Arrow } from './Arrow';
import { Emphasis } from './Emphasis';
import { plainText } from '../lib/emphasis';
import { Wordmark } from './Wordmark';

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  const { values } = useContent();
  const { business } = useSiteData();
  const { startBooking, online } = useBookingIntent();
  const biz = business.status === 'ready' ? business.data : null;

  return (
    <footer className="site-footer">
      {/* The closing: one line in the serif, and the Book button, under a low lamp glow. */}
      <div className="closing">
        <div className="wrap closing__inner">
          <p className="closing__text">
            <Emphasis text={values['closing.title']} />
          </p>
          <a
            className="btn btn--primary btn--large"
            href="#book"
            onClick={(event) => {
              event.preventDefault();
              startBooking();
            }}
          >
            <span>{online ? values['hero.cta'] : OFFLINE_CTA}</span>
            <Arrow />
          </a>
        </div>
      </div>
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <Wordmark className="wordmark--footer" />
          <p className="site-footer__note">{values['footer.note']}</p>
        </div>
        {biz ? (
          <address className="site-footer__contact">
            {biz.contact.address ? <span>{biz.contact.address}</span> : null}
            {biz.contact.phone ? <a href={telHref(biz.contact.phone)}>{biz.contact.phone}</a> : null}
            {biz.contact.email ? <a href={`mailto:${biz.contact.email}`}>{biz.contact.email}</a> : null}
          </address>
        ) : null}
        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            <li>
              <a href="#menu">{plainText(values['menu.title'])}</a>
            </li>
            <li>
              <a href="#book">{plainText(values['book.title'])}</a>
            </li>
            <li>
              <a href="#visit">{plainText(values['visit.title'])}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrap site-footer__base">
        <p>
          © {YEAR} {biz?.name ?? ''}
        </p>
        <a className="site-footer__staff" href="/admin/">
          Staff login
        </a>
      </div>
    </footer>
  );
}
