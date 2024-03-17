const reloj = (fecha: Date): string => {
  let hora = fecha.getHours()
  let minutos = fecha.getMinutes()
  let segundos = fecha.getSeconds()
  return `${hora}:${minutos}:${segundos}`
}

export default reloj
