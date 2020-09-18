const fakeSpotifyResponse = [
    {
        name: 'Tiesto',
        album: {
            src: 'https://img.discogs.com/7CdzmsHOwaP_3XHNmsUsNGqThp4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-657918-1278148679.jpeg.jpg',
            title: 'In search of sunrise'
        }
    },
    {
        name: 'Lady Gaga',
        album: {
            src: 'https://www.udiscovermusic.com/wp-content/uploads/2018/07/Lady-Gaga-The-Fame-Album-Cover-web-optimised-820.jpg',
            title: 'Lady Gaga'
        }
    },
    {
        name: 'Maroon 5',
        album: {
            src: 'https://upload.wikimedia.org/wikipedia/en/5/53/Maroon_5_-_V_%28Official_Album_Cover%29.png',
            title: 'V'
        }
    }
];

let htmlAlbums = '';

fakeSpotifyResponse.forEach(function(artista) {
    htmlAlbums += `
        <article class="album">
            <img src="${artista.album.src}" alt="">
            <h6>${artista.album.title}</h6>
        </article>
    `;
});

let albumWrapperElement = document.getElementById('album-wrapper');

albumWrapperElement.innerHTML = htmlAlbums;

let artistSectionElement = document.getElementById('artist-section');
let browseSectionElement = document.getElementById('browse-section');
let genreSectionElement = document.getElementById('genre-section');

function goto(section) {
    artistSectionElement.classList.remove('active');
    browseSectionElement.classList.remove('active');
    genreSectionElement.classList.remove('active');

    section.classList.add('active');
}

let navBrowse = document.getElementById('nav-browse');
let navArtist = document.getElementById('nav-artist');
let navGenre = document.getElementById('nav-genre');

navBrowse.addEventListener('click', function(e) {
    goto(browseSectionElement);
});

navArtist.addEventListener('click', function(e) {
    goto(artistSectionElement);
});

navGenre.addEventListener('click', function(e) {
    goto(genreSectionElement);
});