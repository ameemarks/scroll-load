import '../styles/stylesheet.scss';

import Image from './modules/image';
import ImageCollection from './modules/image-colletion';
import Scroll from './modules/scroll';

let imageWrapper = new ImageCollection();

function createImageCollection () {
    for (let i: number = 1; i <= 16; i++) {
        let singleImage = new Image ();
        singleImage.createImageSrcAttr(imageWrapper.windowWidth);
        singleImage.appendImage();
    }
}

createImageCollection();

let scroll = new Scroll;