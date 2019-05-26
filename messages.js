function messages (number) {
    var m = [
        "O ideal é beber 300ml de água a cada duas horas",
        "A água ajuda a regular a temperatura corporal",
        "A água ajuda a combater acne, estrias e celulite",
        "A água ajuda a melhorar o funcionamento dos rins",
        "A água ajuda a prevenir o aparecimento de pedras nos rins",
        "A água ajuda a facilitar a digestão",
        "A água ajuda a diminuir o inchaço",
        "A água ajuda a melhorar a circulação sanguínea",
        "A água ajuda a emagrecer"
    ];

    return m[number];
}

exports.get = messages;