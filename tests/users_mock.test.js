const Users = require('../src/application/users_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/users_repository');

jest.mock('../src/port/users_repository');

test('CREATE - Dado válido', async () => {
    const data = {
        nomeMusica: "Nome 1",
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ ...data, id });

    const result = await Users.create(data);
    expect(result).toEqual({ ...data, id });
})

test('CREATE - Dado duplicado', async () => {
    const data = {
        nomeMusica: "Nome 1",
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Users.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})

test('UPDATE - Dado Válido', async () => {
    const data = {
        nomeMusica: "Nome 1",
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    }

    const id = Utils.generateUuid();

    UsersRepository.update.mockResolvedValue({ ...data, id });

    const result = await Users.update(data);
    expect(result).toEqual({...data,id});
})

test('UPDATE - Erro Not Found', async () => {
    const data = {
        nomeMusica: "Nome 1",
        duracaoMusica: "Duração 1",
        autorMusica: "Autor 1"
    }

    const id = Utils.generateUuid();

    UsersRepository.update.mockResolvedValue( Constants.ErrorNotFound,id );

    const result = await Users.update(data);
    expect(result).toEqual(Constants.ErrorNotFound,id);
})

test('DELETE - Dado Válido', async () => {
    const data = {
        nomeMusica: "Nome 1"
    }

    const id = Utils.generateUuid();

    UsersRepository.delete.mockResolvedValue({ ...data, id });

    const result = await Users.delete(data);
    expect(result).toEqual({...data, id});
})

test('LIST - Dado Válido', async () => {
    const data = {
        nomeMusica: "Nome 1"
    }

    const id = Utils.generateUuid();

    UsersRepository.list.mockResolvedValue({ ...data, id });

    const result = await Users.list(data);
    expect(result).toEqual({...data, id});
})