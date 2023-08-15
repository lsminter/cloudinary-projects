import { Cloudinary } from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {image} from "@cloudinary/url-gen/qualifiers/source";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'product_environment_key'
  }
});

const myImage = cld.image('cld-sample-5');

myImage
.resize(fill(300, 300))
  .overlay(
    source(
      image('samples/cloudinary-icon')
        .transformation(new Transformation()
        .resize(scale().height(55))
        )
    )
  )

const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();
