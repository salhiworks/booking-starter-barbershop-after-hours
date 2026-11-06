import { useContent } from '../lib/content';
import { Picture } from './Picture';
import { SectionHead } from './SectionHead';

/** The room: a wide film frame of the shop, a few notes, and a detail of the work. */
export function Shop() {
  const { values } = useContent();
  const room = values['shop.photo'];
  const detail = values['shop.detail'];
  const notes = values['shop.notes'];

  return (
    <section className="room" id="shop" aria-labelledby="shop-title">
      <div className="wrap">
        <SectionHead title={values['shop.title']} titleId="shop-title" lede={values['shop.lede']} />
      </div>
      {room ? (
        <div className="room__stage">
          <div className="frame room__frame">
            <Picture image={room} sizes="(min-width: 1400px) 1300px, 94vw" />
          </div>
        </div>
      ) : null}
      {notes.length > 0 || detail ? (
        <div className={`wrap room__grid${detail ? '' : ' room__grid--no-detail'}`}>
          {detail ? (
            <div className="frame frame--tall room__detail">
              <Picture image={detail} sizes="(min-width: 1000px) 420px, (min-width: 720px) 40vw, 70vw" />
            </div>
          ) : null}
          {notes.length > 0 ? (
            <dl className="notes">
              {notes.map((note, index) => (
                <div className="notes__item" key={`${note.title}-${index}`}>
                  <dt className="notes__title">{note.title}</dt>
                  <dd className="notes__text">{note.text}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];
const COUNT = ['one scene', 'two scenes', 'three scenes', 'four scenes', 'five scenes'];

/** A first visit, scene by scene (the owner's shop.steps): a real sequence, so the numerals mean something. */
export function Scenes() {
  const { values } = useContent();
  const steps = values['shop.steps'];
  if (steps.length === 0) return null;
  return (
    <section className="scenes" id="first-visit" aria-labelledby="scenes-title">
      <div className="wrap">
        <header className="scenes__head">
          <p className="credit">First time here?</p>
          <h2 className="scenes__title" id="scenes-title">
            A visit, in <em className="em">{COUNT[steps.length - 1] ?? `${steps.length} scenes`}</em>
          </h2>
        </header>
        <ol className="scenes__list">
          {steps.map((step, index) => (
            <li className="scene" key={`${step.title}-${index}`}>
              <span className="scene__no" aria-hidden="true">
                {ROMAN[index] ?? index + 1}
              </span>
              <h3 className="scene__name">{step.title}</h3>
              {step.text ? <p className="scene__text">{step.text}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
