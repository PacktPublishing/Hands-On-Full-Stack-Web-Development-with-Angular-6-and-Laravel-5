class MyBand {
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
// My Favorite band and his best albums
let myFavoriteAlbums = new MyBand(["Ace of Spades", "Rock and Roll", "March or Die"], 3);
// Call the listAlbums method.
console.log(myFavoriteAlbums.listAlbums());

/////////// using inheritance with TypeScript ////////////
class MySinger extends MyBand {
    // All Properties from MyBand Class are available inherited here
    // So we define a new constructor.
    constructor(albums_list: Array<string>, total_members: number) {
        // Call the parent's constructor using super keyword.
        super(albums_list, total_members);
    }
    listAlbums(): void {
        console.log("Singer best albums:");
        for (var i = 0; i < this.albums.length; i++) {
            console.log(this.albums[i]);
        }
    }
}
// Create a new instance of the YourBand class.
let singerFavoriteAlbum = new MySinger(["At Falson Prision", "Among out the Stars", "Heroes"], 1);
console.log(singerFavoriteAlbum.listAlbums());