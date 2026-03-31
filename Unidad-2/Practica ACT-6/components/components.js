const Components = {
    createLabel: (text) => {
        const lb = document.createElement('label');
        lb.innerText = text;
        return lb;
    },

    // El peor selector de ciudad: un campo que cambia el texto a Wingardium Leviosa
    createCityInput: () => {
        const input = document.createElement('input');
        input.placeholder = "Ciudad de nacimiento...";
        input.id = "inp-ciudad";
        input.oninput = () => {
            if(Math.random() > 0.8) input.value = "Wingardium Leviosa";
        };
        return input;
    },

    // Selector de hermanos: Solo permite números primos si tienes mala suerte
    createSiblingsInput: () => {
        const input = document.createElement('input');
        input.type = "range";
        input.min = "0";
        input.max = "50";
        input.id = "inp-hermanos";
        return input;
    }
};