const create = {
    nomeMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    duracaoMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    autorMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    nomeMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    duracaoMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    autorMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    nomeMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nomeMusica: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    update,
    get,
    deleteBy,
};