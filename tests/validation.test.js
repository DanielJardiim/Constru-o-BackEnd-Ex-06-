const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido - create', () => {
    const result = Validation.create({
        nomeMusica: "Nome 1",
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome - create', () => {
    const result = Validation.create({
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso válido - update', () => {
    const result = Validation.update({
        nomeMusica: "Nome 1",
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome - update', () => {
    const result = Validation.update({
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso válido - get', () => {
    const result = Validation.get({
        nomeMusica: "Nome 1"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome - get', () => {
    const result = Validation.get({
        duracaoMusica: "Duração 1"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso válido - deleteBy', () => {
    const result = Validation.deleteBy({
        nomeMusica: "Nome 1"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome - deleteBy', () => {
    const result = Validation.deleteBy({
        duracaoMusica: "Duração 1"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});