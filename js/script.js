function getTile(width, hight) {
    let mainRectangle = {
        width: width,
        hight: hight,
    };

    let work = true;
    let squares = [];

    while (work === true) {
        if (mainRectangle.width > mainRectangle.hight) {
            // Получаем остаток от ширины
            mainRectangle.width = mainRectangle.width % mainRectangle.hight;
            // Получаем количество квадратов
            // let howMuchSquares = mainRectangle.width / mainRectangle.hight;
            let getIntNum = width - mainRectangle.width
            let howMuchSquares = getIntNum / mainRectangle.hight;
            squares.push({
                "Основная ширина": width,
                "Основная высота": hight,
                "Остаток высоты": mainRectangle.hight,
                "Остаток ширины": mainRectangle.width,
                "Сколько квадратов": howMuchSquares
            });
        } else if (mainRectangle.width < mainRectangle.hight) {
            // Получаем остаток от высоты
            mainRectangle.hight = mainRectangle.hight % mainRectangle.width;
            // let howMuchSquares = mainRectangle.hight / mainRectangle.width;
            let getIntNum = hight - mainRectangle.hight
            let howMuchSquares = getIntNum / mainRectangle.width;
            squares.push({
                "Основная ширина": width,
                "Основная высота": hight,
                "Остаток высоты": mainRectangle.hight,
                "Остаток ширины": mainRectangle.width,
                "Сколько квадратов": howMuchSquares
            });
        } else if (mainRectangle.width === 0 || mainRectangle.hight === 0) {
            work = false;
        }
    }

    // squares.pop();
    // squares.pop();
    console.log(mainRectangle, squares);
}

console.log(getTile(1340, 50))
