import { ParsedValueEffect } from '..';

/**
 * Return the start and end pixel values for an elements translations
 */
export function getStartEndValueInPx(
  translate: ParsedValueEffect,
  elementSize: number
) {
  let { start, end, unit } = translate;

  if (unit === '%') {
    const scale = elementSize / 100;
    start = start * scale;
    end = end * scale;
  } else if (unit === 'vh') {
    const scale = document.documentElement.clientHeight / 100;
    start = start * scale;
    end = end * scale;
  } else if (unit === 'vw') {
    const scale = document.documentElement.clientWidth / 100;
    start = start * scale;
    end = end * scale;
  }

  return {
    start,
    end,
  };
}
