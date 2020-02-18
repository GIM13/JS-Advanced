const SoftUniFy = require(`./03Softunify`);
const assert = require(`chai`).assert;

describe("SoftUniFy", function() {
      it("check for new SoftUniFy", () => {
         let result = new SoftUniFy();
         assert.deepEqual(result.allSongs,{});
      });
    it("check for downloadSong", () => {
        let result = new SoftUniFy();
        result.downloadSong(`artist`, `song`, `lyrics`);

        assert.equal(result.allSongs[`artist`]['songs'].pop(),`song - lyrics`);
    });
    it("check for playSong missing song", () => {
        let result = new SoftUniFy();

        let song = `song`;
        assert.equal(result.playSong(song)
    ,`You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`);
    });
    it("check for playSong ", () => {
        let result = new SoftUniFy();
        result.downloadSong(`artist`, `song`, `lyrics`);
        assert.equal(result.playSong( `song`),`artist:\nsong - lyrics\n`);
    });
    it("check for songsList", () => {
        let result = new SoftUniFy();
        result.downloadSong(`artist`, `song`, `lyrics`);

        assert.equal( result.songsList,`song - lyrics`);
    });
    it("check for songsList missing", () => {
        let result = new SoftUniFy();

        assert.equal( result.songsList,'Your song list is empty');
    });
    it("check for rateArtist", () => {
        let result = new SoftUniFy();
        result.downloadSong(`artist`, `song`, `lyrics`);

        assert.equal( result.rateArtist(`artist`,77),77);
    });
    it("check for rateArtist missing", () => {
        let result = new SoftUniFy();
        result.downloadSong(`artist`, `song`, `lyrics`);

        assert.equal( result.rateArtist(`Artist`),`The Artist is not on your artist list.`);
    });
});
