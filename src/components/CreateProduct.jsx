import React from "react";

function CreateProduct() {
  return (

    <div style={{height:"70%"}} >
       <h1 className="display-6 fw-bolder text-center">Add Product</h1>
      <hr/>
      <form className="justify-content-center" style={{marginLeft:"25%"}} >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Title</label>
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="Title"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="desc">Description</label>
            <input
              type="text"
              class="form-control"
              id="desc"
              placeholder="Description"
            />
          </div>
          <div class="form-group col-md-10"  style={{marginTop:"2%",marginBottom:"2%"}}>
    <label for="product-image"  >Select image for product</label>
    <input type="file" style={{marginLeft:"16%"}} class="form-control-file" id="product-image"/>
  </div>
          <div class="form-group col-md-6">
            <label for="price">Price</label>
            <input
              type="text"
              class="form-control"
              id="price"
              placeholder="Price"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="rating">Rating</label>
            <input
              type="text"
              class="form-control"
              id="rating"
              placeholder="Rating"
            />
          </div>
         </div>
        <button type="submit" class="btn btn-primary mt-4">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;