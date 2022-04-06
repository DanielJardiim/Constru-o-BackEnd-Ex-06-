const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Nome 1",
        forca: "Força 1",
        poder: "Poder 1",
        origem: "Origem 1"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        forca: "Força 1",
        poder: "Poder 1",
        origem: "Origem 1"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
