const createImagesObject = data => {
  const images = initializeImages();
  data.allFile.edges.forEach(image => {
    const path = image.node.relativePath;
    switch (getContainingFolder(path)) {
      case 'reactApps':
        images.reactApps.push(image);
        break;
      case 'apisAndMicroservices':
        images.apisAndMicroservices.push(image);
        break;
      case 'informationSecurityAndQualityAssurance':
        images.informationSecurityAndQualityAssurance.push(image);
        break;
      case 'javascriptAlgorithmsAndDataStructures':
        images.javascriptAlgorithmsAndDataStructures.push(image);
        break;
      case 'responsiveWebDesign':
        images.responsiveWebDesign.push(image);
        break;
      case 'thirdPartyApis':
        images.thirdPartyApis.push(image);
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
  informationSecurityAndQualityAssurance: [],
  apisAndMicroservices: [],
  javascriptAlgorithmsAndDataStructures: [],
  responsiveWebDesign: [],
  thirdPartyApis: []
});

export default createImagesObject;
