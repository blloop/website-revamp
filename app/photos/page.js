import { client } from '@/sanity/lib/client';
import Container from '../components/Container';
import PhotoCard from '../components/PhotoCard';
import { parse } from 'date-fns';

export default async function Photos() {
  const photos = await getPhotos();

  return (
    <>
      {photos.map((photo) => (
        <Container>
          <PhotoCard key={photo.description} photo={parseImage(photo)}/>
        </Container>
      ))}
    </>
  );
}

function parseImage(photo) {
  return ({
    title: photo.description,
    image: photo.image,
    favorite: photo.favorite
  });
}

async function getPhotos() {
  const query = `*[_type == 'photo'] | order(date desc) {
    favorite,
    image,
    description
  }`;

  const photos = await client.fetch(query);
  return photos;
}
