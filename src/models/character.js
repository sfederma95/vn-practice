class Character {
    constructor(name, nameColor, images){
        this.name = name;
        this.nameColor = nameColor;
        this.images = images;
        this.currentImg = this.images.default;
    }
    // setImage(imageName){
    //     this.currentImg = this.images[imageName];
    //     return
    // }
}

export default Character;