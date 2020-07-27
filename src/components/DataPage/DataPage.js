import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import './DataPage.css';

export default function DataPage() {
    return (
        <div className='DataPageContainer'>
            <Container>
                <Jumbotron>
                    <h1>Data</h1>
                    <p>An explanation on where this data came from and what it contains.</p>
                </Jumbotron>
                <div>
                    <h1>Data Source</h1>
                    <p>
                        In 2012 the City of Philadelphia began pursuing and enacting a public open data program through
                         <a href='https://www.opendataphilly.org/'> OpenDataPhilly</a>. The data used in this project is provided
                        by the aforementioned program, in their
                        <a href='https://www.opendataphilly.org/dataset/opa-property-assessments'> Property Assessment </a>
                         dataset. Publicly available, anyone can view or use the dataset without barrier.
                    </p>
                </div>
                <div>
                    <h1>Data Description</h1>
                    <p>
                        This dataset is comprised on completely public information. It does not contain any personal
                        information about who lives in a property or the vacancy status of the properties.
                        <br/>
                        The data used for this site contains the following for each property listed:
                    </p>
                    <div>
                        <CardColumns>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Owner 1 Name</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>John Doe</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The primary owner
                                            of a property.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>owner_1</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Owner 2 Name</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>Jane Doe</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The secondary owner
                                            of a property. This is not always provided.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>owner_2</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Street Address </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>123 Street Road</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The street address
                                            of the property.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>location</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Geocoordinates  </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>[40.003088,-75.108357]</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The latitude and
                                            longitude of a property.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>lat lng</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Sale Date  </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>2013-02-24</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The last recorded
                                            sale of the property, in Year-Month-Day format.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>sale_date</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Sale Price  </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>40000.0</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The last recorded
                                            sale of the property, in Dollar amount. If this field is
                                            <span className='dataDescCardItalic'> 1.0</span> it is not an error.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>sale_price</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Year Built </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>2013-02-24</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The year the
                                            property was built. <span className='dataDescCardBold'>Warning: </span>
                                            this may be Unknown or an Estimate.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>year_built</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Year Built Estimate</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>Y or N</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> If the year built
                                            provided is an estimate.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>year_built_estimate</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Category </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>Commercial</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The type of
                                            property.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>category_code_description</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Recording Date </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>2014-02-24</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The date the
                                            property assessment was recorded.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>recording_date</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border={'dark'}>
                                <Card.Header className='dataDescCardBold dataDescCardHeader'>Zip Code </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <span className={'dataDescCardBold'}>Example: </span>
                                            <span className={'dataDescCardItalic'}>19104</span>
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Description:</span> The zip code of
                                            property. Truncated to the first five digits.
                                        </p>
                                        <p>
                                            <span className={'dataDescCardBold'}>Data Reference: </span>
                                            <span className={'dataDescCardItalic'}>zip_code</span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                        <br/>
                    </div>
                </div>
                <div>
                    <h1>Data Handling</h1>
                    <p>
                        This site was put together by an experienced tenant organizer in the Philadelphia area. As this
                        information is public, data is only considered for omitting after a complaint
                        is sent to <a href="mailto:phl.landlord.spotter@gmail.com">phl.landlord.spotter@gmail.com</a>.
                    </p>
                </div>
                <div>
                    <h1>Data Concerns</h1>
                    <p>
                        If you have a concern or issue with this site or the data displayed on
                        it please email <a href="mailto:phl.landlord.spotter@gmail.com">phl.landlord.spotter@gmail.com</a>.
                    </p>
                </div>
            </Container>
        </div>
    )
}
