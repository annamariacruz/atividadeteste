export function verificarIdade(idade) {
    return idade >= 18;
}

export function habilitarCidades(estadoSelecionado) {
    let cidades = [];
    switch (estadoSelecionado) {
        case 'MG':
            cidades = ['Raposos', 'Nova Lima', 'Belo Horizonte', 'Rio Acima'];
            break;
        case 'RJ':
            cidades = ['Rio de Janeiro', 'Angra dos Reis', 'Petropolis', 'Arraial do cabo'];
            break;
        case 'SP':
            cidades = ['São Paulo', 'Pirituba', 'São José dos Campos', 'Campinas'];
            break;
        case 'ES':
            cidades = ['Itapemirim', 'Vila Velha', 'Vitória', 'Guarapari'];
            break;
        default:
            cidades = [];
    }
    return cidades;
}

export function validatePassword(senha, senhaRepetida) {
    const lengthCriteria = senha.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(senha);
    const specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const numberCriteria = /[0-9]/.test(senha);

    const match = senha === senhaRepetida;

    return {
        lengthCriteria,
        uppercaseCriteria,
        specialCriteria,
        numberCriteria,
        match
    };
}

export function validateForm(senha, senhaRepetida) {
    if (senha.length < 8) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }
    if (!/[A-Z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        return "A senha deve conter pelo menos um caractere especial.";
    }
    if (!/[0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um número.";
    }
    if (senha !== senhaRepetida) {
        return "As senhas digitadas não coincidem.";
    }
    return "Formulário válido.";
}