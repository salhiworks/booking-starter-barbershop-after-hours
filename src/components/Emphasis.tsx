import { Fragment } from 'react';

/**
 * Owner titles may star a word or two — "A good cut, *unhurried*." — to set it
 * in the lamp-lit italic. Plain text in, React elements out: never HTML. An
 * unmatched star is shown as typed.
 */
export function Emphasis({ text }: { text: string }) {
  const parts = text.split(/(\*[^*\n]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.length > 2 && part.startsWith('*') && part.endsWith('*') ? (
          <em className="em" key={i}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
