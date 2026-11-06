import type { ReactNode } from 'react';
import { Emphasis } from './Emphasis';

interface SectionHeadProps {
  /** A short credit above the title — a fact, not a number. Optional. */
  kicker?: string;
  title: string;
  titleId: string;
  lede?: string;
  /** Extra lines beside the lede (honest labels, a button). */
  children?: ReactNode;
  className?: string;
}

/** Serif title on the left (its *starred* words in the italic highlight); the lede beside it on wide screens. */
export function SectionHead({ kicker, title, titleId, lede, children, className = '' }: SectionHeadProps) {
  return (
    <header className={`section-head ${className}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="section-title" id={titleId}>
        <Emphasis text={title} />
      </h2>
      {lede || children ? (
        <div className="section-head__side">
          {lede ? <p className="section-lede">{lede}</p> : null}
          {children}
        </div>
      ) : null}
    </header>
  );
}
