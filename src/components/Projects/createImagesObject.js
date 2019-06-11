const createImagesObject = data => {
  const images = initializeImages();
  data.allFile.edges.forEach(image => {
    const path = image.node.relativePath;
    switch (getContainingFolder(path)) {
      case 'reactApps':
        images.reactApps.push(image);
        break;
      case 'restApis':
        images.restApis.push(image);
        break;
      default:
        break;
    }
  });
  return images;
};

const getContainingFolder = relativePath => relativePath.split('/')[0];

const initializeImages = () => ({
  reactApps: [],
  restApis: []
});

export default createImagesObject;
