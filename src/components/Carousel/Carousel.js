import Carousel from 'react-material-ui-carousel'

const CarouselComponent = () => {
  var items = [
    {
      name: 'image1',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      name: 'image2',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      name: 'image3',
      image: 'https://via.placeholder.com/800x400',
    },
  ]
  return (
    <Carousel
      animation='slide'
      sx={{ height: '350px', width: '100%', borderRadius: '10px' }}
    >
      {items.map((item) => (
        <img
          key={item.image}
          //sx={{ height: '100%', width: '100%', borderRadius: '10px' }}
          src={item.image}
          alt={item.name}
        ></img>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
