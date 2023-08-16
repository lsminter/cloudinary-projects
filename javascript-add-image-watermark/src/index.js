import {Cloudinary, Transformation} from "@cloudinary/url-gen";
import {fill, scale} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {image, text} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import { opacity } from "@cloudinary/url-gen/actions/adjust";



const cld = new Cloudinary({
  cloud: {
    cloudName: 'dlq9isoe5'
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
    .position(new Position().gravity(compass('south_east')))
  )
.format('png')

const mySecondImage = cld.image('cld-sample')

mySecondImage
.resize(fill(300, 300))
.overlay(   
  source(
    text('PREVIEW', new TextStyle('arial', 60)
    .fontWeight('bold'))
    .textColor('gray')
    .transformation(new Transformation().adjust(opacity(70)))
  )
)
.format('png')


const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();

const secondImgElement = document.createElement('img');
document.body.appendChild(secondImgElement);
secondImgElement.src = mySecondImage.toURL();