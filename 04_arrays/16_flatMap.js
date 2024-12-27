const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [
        {
            nome: 'Carla',
            nota: 8.9
        }, {
            nome: 'Roberto',
            nota: 7.3
        }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaturma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaturma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasDaturma)
console.log(notas2)