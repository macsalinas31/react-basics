

function Carousel (){
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.thecoolist.com/wp-content/uploads/2016/04/Pentacon-Six-TL-vintage-camera-960x633.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="https://assets.community.lomography.com/1c/1ba05b5f93082b03b63cca45e6ee7729d1ca68/640x414x1.jpg?auth=24c471a159aefc3a0c17ad649108bb421f8a748b" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src="https://www.greigclifford.com/couk/images/blog/canon-p/canon-p-1d-600px.jpg" class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
       
    )
}
export default Carousel;