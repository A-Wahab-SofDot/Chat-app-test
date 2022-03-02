export function parseDateToISO(date) {
  return new Date(date).toISOString().slice(0, 10)
}

export function getNameInitials(name) {
  const initials = name.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g)
  return initials
}
