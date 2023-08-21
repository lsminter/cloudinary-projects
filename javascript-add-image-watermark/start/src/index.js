import { Cloudinary, Transformation } from "@cloudinary/url-gen";
import { fill, scale } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image, text } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { opacity } from "@cloudinary/url-gen/actions/adjust";

const cloudName = ''

const cld = new Cloudinary({
  cloud: {
    cloudName: `${cloudName}`
  }
});

const myImage = cld.image('cld-sample-5');

myImage
  .resize(fill(300, 300))

const mySecondImage = cld.image('cld-sample')

mySecondImage
  .resize(fill(300, 300))

const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();

const secondImgElement = document.createElement('img');
document.body.appendChild(secondImgElement);
secondImgElement.src = mySecondImage.toURL();