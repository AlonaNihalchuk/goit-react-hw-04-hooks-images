function mapper(hits) {
  return hits.map(
    ({
      id: imageId,
      webformatURL: smallImg,
      largeImageURL: largeImg,
      tags: tagsImg,
    }) => ({
      imageId,
      smallImg,
      largeImg,
      tagsImg,
    })
  );
}

export default mapper;
