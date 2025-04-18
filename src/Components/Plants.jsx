import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Plants() {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9NJOTWAWIWHzZ4Q0rMO6tlvXX7MDaYA6uw&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Cactus</Card.Title>
          <Card.Text>
          1.Soothing properties <br/>
          2.Skincare benefits
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2718447/pexels-photo-2718447.jpeg?auto=compress&cs=tinysrgb&w=600" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Variety Cactus</Card.Title>
          <Card.Text>
            1.Drought tolerance <br/>
            2.Unique appearance
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpS0wQwOixUf48X1EiF0aiNS2iQmQe8IG2g&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Mango</Card.Title>
          <Card.Text>
            1.Nutritional value <br/>
            2.Culinary versatility
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMY1i-vxEmyYLECHl5ZvdoRGHuutdzd919Q&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Pongamia</Card.Title>
          <Card.Text>
          1.Biofuel source <br/>
          2.Soil erosion control
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card>      
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1397694785/photo/coconut-saplings-in-the-nursery.jpg?s=612x612&w=0&k=20&c=TAHqPM-NFzBq96QiJueb9-KjMRYsPdMin5j3BUgMcIU=" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Cocunut</Card.Title>
          <Card.Text>
          1.Food and beverages <br/>
          2.Skincare and cosmetics
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>    
    <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2022/06/09/10/48/chinese-banyan-7252276_1280.jpg" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Banyan</Card.Title>
          <Card.Text>
          1.Cultural significance <br/>
          2.Symbolism 
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card>  
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrfH5paiKwr4djQ9Klcgxjj3rZr5uEX1IMQ&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Pipal</Card.Title>
          <Card.Text>
          1.Long lifespan: <br/>
          2.Biodiversity support
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card> 
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6inlIE9iip24GJ5bX2Br7g7WG6q0KOAJ7w&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Fig</Card.Title>
          <Card.Text>
          1.Foods <br/>
          2.Ornamental purposes:
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card>       
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVBFpEqo2pbjutkFTK5nKCPRUMhJNxaFPuQ&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>JackFruit</Card.Title>
          <Card.Text>
          1.Food <br/>
          2.Wood 
          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>   
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnccMeJzLqlHU9Sw-7fPHoBII3qfBMR_w-kw&s" style={{ height: '370px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>Bamboo</Card.Title>
          <Card.Text>
          1.Building material <br/>
          2.Furniture and Crafts

          </Card.Text>
          <Button variant="warning" className="me-3">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>        </Card.Body>
      </Card>       
      </div>
    </>     
  );
}

export default Plants;

