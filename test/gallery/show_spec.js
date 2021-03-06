/* global api, expect, describe, it, beforeEach */

const Gallery = require('../../models/gallery');


const galleryIds = [
  '5be9bd11c7f4b190431791a6',
  '5be9bd11c7f4b190431791a7',
  '5be9bd11c7f4b190431791a8',
  '5be9bd11c7f4b190431791a9',
  '5be9bd11c7f4b190431791a5',
  '5be9bd11c7f4b190431791a4'
];


const galleryData =  {
  _id: galleryIds[1],
  name: 'Somerset House',
  image: 'https://bit.ly/2ONZkeE',
  city: 'London',
  country: 'UK',
  description: 'Offering a diverse and dynamic public programme of contemporary arts and culture, we are also a home to a large community of creative businesses, artists and makers, including Somerset House Studios. One of the city’s most spectacular and well-loved spaces, we are a place where art and culture is imagined, made and experienced by our 3 million visitors every year.',
  latlgn: { lat: 51.51135, lgn: -0.11903},
  locationName: 'Temple'
};


let galleryId;

describe('Gallery SHOW', () => {

  beforeEach(done => {
    Gallery.remove({})
      .then(() => Gallery.create(galleryData))
      .then(gallery => {
        galleryId = gallery._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(galleryData.name);
        expect(res.body.image).to.eq(galleryData.image);
        done();
      });
  });

});
