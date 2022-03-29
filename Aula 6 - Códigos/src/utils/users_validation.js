const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    forca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    poder: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    origem: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    deleteBy,
};