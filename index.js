const sacar = () => {
    let valor = document.querySelector('input').value
    const notas = [100, 50, 10, 5, 1]
    let saque = []

    notas.map(element =>{
        let nota = Math.floor(valor/element)
        valor = valor - element*nota
        saque.push(nota)
    })

    p = document.querySelector('.texto')
    p.innerHTML = `Saque: 100: ${saque[0]} | 50: ${saque[1]} | 10: ${saque[2]} | 5: ${saque[3]} | 1: ${saque[4]}`
}
