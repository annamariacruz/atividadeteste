const { it } = require('node:test')
const {verificarSenhas} = require('./script')

it('Testando se a senha da certo' , () => {
    expect(verificarSenhas("a"))
})

it('Testando se a senha é igual a confirmação da senha', () => {
    expect(verificarSenhas("abc123" "abc239")).toBe(false)
})