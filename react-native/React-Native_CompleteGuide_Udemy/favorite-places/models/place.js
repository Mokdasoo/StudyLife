export class Place {
    constructor(title, imageUri, location, id) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address;
        this.location= {lat: location.lat, lng: location.lng};  // { 위도lat: 0.12314, 경도lng: 128.123}
        this.id = id;
    }
}