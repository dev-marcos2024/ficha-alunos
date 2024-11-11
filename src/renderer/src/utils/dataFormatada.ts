export  const dataFormatada = (data: string) => {
  if (data.trim() === '') return
  const d = data.split('-')
  return `${d[2]}/${d[1]}/${d[0]}`
}


