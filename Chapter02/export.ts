export class MyBand {
    // Properties without prefix are public
    // Available is; Private, Protected
    albums: Array<string>;
    members: number;
    constructor(albums_list: Array<string>, total_members: number) {
        this.albums = albums_list;
        this.members = total_members;
    }
    // Methods
    listAlbums(): void {
        console.log("My favorite albums: ");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    }
}