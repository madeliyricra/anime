export const returnYear = (date: string | undefined) => {
  if (!date) return '-'

  const dateFormat = new Date(date)

  let year = dateFormat.getFullYear()
  return year
}
