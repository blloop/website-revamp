export function orderByDate(values) {
  return values.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function filterByTag(values, tag) {
  return tag ? values.filter((e) => e.tags?.includes(tag)) : values;
}
