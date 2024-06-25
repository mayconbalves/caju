export const documentIdMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const documentIdValidation = (value: string | number[]) => {
  if (typeof value !== 'string') return false
  value = value.replace(/[^\d]+/g, '')
  if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) return false
  value = value.split('').map((el) => +el)
  const rest = (count: number) =>
    ((value
      .slice(0, count - 12)
      .reduce(
        (sum: number, el: number, index: number) => sum + el * (count - index),
        0
      ) *
      10) %
      11) %
    10
  return rest(10) === value[9] && rest(11) === value[10]
}
