import React from "react";
import './AddItemStyle.css'
class AddItem extends React.Component {
  constructor(props) {
    super(props); // either dont use props here. 
    this.state = {
      productName: "",
      productPrice: 0,
      header:true,
      txt:""

    };
  }


  componentWillMount() {
    this.setState({
      header: "My GHQ website",
    });
  }
 
  render() {
    return (
      <>

      <form
        className="row mb-5 m-3"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            placeholder="Enter Product"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
          //  value={this.state.productName}
            required/>
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
          //  value={this.state.productPrice}
            
            required/>
        </div>
        <button type="submit" className="btn1">
          Add
        </button>
        
      </form>
      <button type="submit" className="btn btn-danger " onClick={
        ()=>{
          this.setState({header: !this.state.header})
          // 1st true , 2 false
        }
      }
      >
        {this.state.header ? (
           <h4>A Cluster of Classes here Made here</h4>
        ) : (
          <h4>My Time Table is Change Rigte Now </h4>
        )}
      {this.state.header}
    </button>
    </>
    );
  }
}
export default AddItem;
