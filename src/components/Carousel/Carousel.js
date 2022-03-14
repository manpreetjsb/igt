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
      sx={{ height: '100%', width: '100%', borderRadius: '10px' }}
    >
      {items.map((product) => (
        <img
          key={product.image}
          sx={{ height: '100vw', width: '100vw', borderRadius: '10px' }}
          src={product.image}
          alt={product.name}
        ></img>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
