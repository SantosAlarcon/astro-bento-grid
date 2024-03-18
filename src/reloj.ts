
document.addEventListener("DOMContentLoaded", () => {
    function reloj(fecha: Date): string {
      let hora = fecha.getHours().toString().padStart(2, '0')
      let minutos = fecha.getMinutes().toString().padStart(2, '0')
      return `${hora}:${minutos}`
    }
  const clock = document.querySelector('#clock')
  setInterval(() => {
	clock!.textContent = reloj(new Date())
  }, 1000)	
})
