import React, { Component } from 'react';

class AddFood extends Component {
   render() {
      return(
         <div className="container">

            <form>
               <div className="form-group row">
                  <label for="input" className="col-sm-2 col-form-label">Text</label>
                  <div className="col-sm-10">
                     <input type="text" className="form-control" id="input" placeholder="Add food" />
                     <button type="submit" className="btn-primary">Add</button>
                  </div>
               </div>
            </form>
         
         </div>
      );
   }
}

export default AddFood;