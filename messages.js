function messages (number) {
    var m = [
        "Melhor uma pedra no seu caminho do que duas no rim, beba água!",
        "Tu é muito hidratado brother, eu me orgulho muito",
        "Beba água!",
        "Gente hidratada >>>",
        "Se hidratar é bom, mas já foi ao banheiro?",
        "Só vim te pedir pra se hidratar, valeu, tamo junto!"
    ];

    return m[number];
}

exports.get = messages;