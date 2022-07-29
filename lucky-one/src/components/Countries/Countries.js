import React from 'react';
import './Countries.css';

const Countries = (props) => {
    const {picture, budget, country, addToVisit} = props;
    return (
            <div className="col-12 col-lg-4  country-container container">
                    <div className="card">
                        <div className="img-container">
                            <img className="img-fluid" src={picture} alt="Country" />
                        </div>
                        <div className="info-container">
                            <h5 className="text-center">{country}</h5>
                            <h6 className="text-center">Budget: $ {budget}</h6>                 
                        </div>
                        <div className="d-flex justify-content-center">
                        <button onClick={() => addToVisit(props)} className="btn btn-dark px-5 pt-2 pb-2 mb-3 visit-button">
                        Add Tour <i class="fa-solid fa-cart-arrow-down mx-3"></i> 
                        </button>  
                    </div> 
                </div>
            </div>
    );
};

export default Countries;