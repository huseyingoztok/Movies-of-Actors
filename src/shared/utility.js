const imageUrl = "http://image.tmdb.org/t/p";

export const formImageUrl = (path) => {

    let imagePath = null;
    if (path) {
        imagePath = `${imageUrl}/w185/${path}`;
    }
    return imagePath;
}
