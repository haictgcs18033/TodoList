import React, { Component } from 'react'


export default class Main extends Component {
    items = [
        { title: 'Item one', price: '$24.99', description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis vitae sapiente at assumenda ipsum. Et, deleniti nostrum accusamus commodi alias quaerat distinctio dolorum labore, magnam libero quam. Illo, quo.' },
        { title: 'Item one', price: '$24.99', description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis vitae sapiente at assumenda ipsum. Et, deleniti nostrum accusamus commodi alias quaerat distinctio dolorum labore, magnam libero quam. Illo, quo.' },
        { title: 'Item one', price: '$24.99', description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis vitae sapiente at assumenda ipsum. Et, deleniti nostrum accusamus commodi alias quaerat distinctio dolorum labore, magnam libero quam. Illo, quo.' },
        { title: 'Item one', price: '$24.99', description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis vitae sapiente at assumenda ipsum. Et, deleniti nostrum accusamus commodi alias quaerat distinctio dolorum labore, magnam libero quam. Illo, quo.' },
        { title: 'Item one', price: '$24.99', description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis vitae sapiente at assumenda ipsum. Et, deleniti nostrum accusamus commodi alias quaerat distinctio dolorum labore, magnam libero quam. Illo, quo.' },
        { title: 'Item one', price: '$24.99', description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis vitae sapiente at assumenda ipsum. Et, deleniti nostrum accusamus commodi alias quaerat distinctio dolorum labore, magnam libero quam. Illo, quo.' }
    ]
    renderItemWithMap = () => {
        const arrItemJSX = this.items.map((item, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top w-100" src="http://placehold.it/700x400" alt />
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.price}</p>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer">
                        <p>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </p>
                    </div>
                </div>

            </div>
        });
        return arrItemJSX;
    };
    render() {
        return (
            <div className="main">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="http://placehold.it/900x350" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://placehold.it/900x350" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://placehold.it/900x350" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container">
                    <div class="row">
                        {this.renderItemWithMap()}
                    </div>
                </div>
            </div>
        )
    }
}
