export default class Image {
    image: HTMLElement;
    source: Attr;

    constructor () {
        this.image = document.createElement("img");              // Create a <img> element
    }

    createImageSrcAttr (windowSize: number) {
        this.source = document.createAttribute("src");

        let imageSize = windowSize/4-3;         //HACK to insert 4 pics in row
        console.log("IMGSize:" + imageSize);
        let imageSizeString: string = imageSize.toString();
        let UNSPLASH_PART: string = 'https://unsplash.it/';
        let RANDOM: string = '?random';

        this.source.value = UNSPLASH_PART.concat(imageSizeString, '/', RANDOM);     // Set the value of src
        this.image.setAttributeNode(this.source);                // Add the src to <img>
    }

    appendImage () {
        document.body.appendChild(this.image);
    }

}
