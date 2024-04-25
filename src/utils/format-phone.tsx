export const fPhone = (msisdn: string, format: '0' | '66') => {
  const digitsOnly = msisdn?.replace(/\D/g, '')

  if (![10, 11].includes(digitsOnly.length)) return '-'

  return format === '66'
    ? digitsOnly.startsWith('0')
      ? `66${digitsOnly.slice(1)}`
      : digitsOnly
    : format === '0'
      ? digitsOnly.startsWith('66')
        ? `0${digitsOnly.slice(2)}`
        : digitsOnly
      : '-'
}
