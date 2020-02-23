import Image1 from "../../images/background/Image_1.jpg";
import Image2 from "../../images/background/Image_2.png";
import Image3 from "../../images/background/Image_3.png";
import React from "react";


/// 以下函数返回 min（包含）～ max（包含）之间的数字：
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomBackGroundStyle() {
    const index = getRndInteger(1, 3);
    let image;
    switch (index) {
        case 1:
            image = Image1;
            break;
        case 2:
            image = Image2;
            break;
        case 3:
            image = Image3;
            break;
        default:
            image = Image1;
            break;
    }
    return {
        backgroundImage: `url(${image})`
    };
}

export default RandomBackGroundStyle;