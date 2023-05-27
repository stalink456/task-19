export const isEmptyValue = (
  value: string[] | string | undefined
): null | string => {
  if (value === undefined) {
    return null;
  }

  if (Array.isArray(value)) {
    return value.join(';');
  }

  if (typeof value === 'string') {
    return value;
  }

  return null;
};
