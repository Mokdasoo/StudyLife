class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this. address = address;
        this.location= location;  // { 위도lat: 0.12314, 경도lng: 128.123}
        this.id = new Date().toString() + Math.random().toString();
    }
}