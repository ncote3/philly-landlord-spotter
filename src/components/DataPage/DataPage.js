import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DataPage.scss";
import DataExplainerCard from "../DataExplainerCard/DataExplainerCard";

export default function DataPage() {
  return (
    <div className="DataPageWrapper">
      <Container className="DataPageContainer">
        <div className="DataPageJumbotron">
          <h1>Data</h1>
          <p>
            An explanation on where this data came from and what it contains.
          </p>
        </div>
        <div className="DataPageSection whiteText">
          <Container>
            <h1>Data Source</h1>
            <p>
              In 2012 the City of Philadelphia began pursuing and enacting a
              public open data program through
              <a href="https://www.opendataphilly.org/"> OpenDataPhilly</a>. The
              data used in this project is provided by the aforementioned
              program, in their
              <a href="https://www.opendataphilly.org/dataset/opa-property-assessments">
                {" "}
                Property Assessment{" "}
              </a>
              dataset. Publicly available, anyone can view or use the dataset
              without barrier.
            </p>
          </Container>
        </div>
        <div className="DataPageSection">
          <Container>
            <div className="whiteText">
              <h1>Data Description</h1>
              <p>
                This dataset is comprised on completely public information. It
                does not contain any personal information about who lives in a
                property or the vacancy status of the properties.
                <br />
                The data used for this site contains the following for each
                property listed:
              </p>
            </div>
            <div>
              <Row xs={1} md={2} className="g-4">
                <Col>
                  <DataExplainerCard
                    title={"Owner 1 Name"}
                    example={"John Doe"}
                    description={"The primary owner of a property."}
                    dataReference={"owner_1"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Owner 2 Name"}
                    example={"Jane Doe"}
                    description={
                      "The secondary owner of a property. This is not always provided."
                    }
                    dataReference={"owner_2"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Street Address"}
                    example={"123 Street Road"}
                    description={"The street address of the property."}
                    dataReference={"location"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Geocoordinates"}
                    example={"[40.003088,-75.108357]"}
                    description={"The latitude and longitude of a property."}
                    dataReference={"lat lng"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Sale Price"}
                    example={"40000.0"}
                    description={[
                      "The last recorded sale of the property, in Dollar amount. If this field is ",
                      <span className="dataDescCardItalic"> 1.0</span>,
                      " it is not an error.",
                    ]}
                    dataReference={"sale_price"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Year Built"}
                    example={"2013-02-24"}
                    description={[
                      "The year the property was built. ",
                      <span className="dataDescCardBold">Warning:</span>,
                      " this may be Unknown or an Estimate.",
                    ]}
                    dataReference={"year_built"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Year Built Estimate"}
                    example={"Y or N"}
                    description={"If the year built provided is an estimate."}
                    dataReference={"year_built_estimate"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Category"}
                    example={"Commercial"}
                    description={"The type of property."}
                    dataReference={"category_code_description"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Recording Date"}
                    example={"2014-02-24"}
                    description={
                      "The date the property assessment was recorded."
                    }
                    dataReference={"recording_date"}
                  />
                </Col>
                <Col>
                  <DataExplainerCard
                    title={"Zip Code"}
                    example={"19104"}
                    description={
                      "The zip code of property. Truncated to the first five digits."
                    }
                    dataReference={"zip_code"}
                  />
                </Col>
              </Row>
              <br />
            </div>
          </Container>
        </div>
        <div className="DataPageSection whiteText">
          <Container>
            <h1>Data Handling</h1>
            <p>
              This site was put together by an experienced tenant organizer in
              the Philadelphia area. As this information is public, data is only
              considered for omitting after a complaint is sent to{" "}
              <a href="mailto:phl.landlord.spotter@gmail.com">
                phl.landlord.spotter@gmail.com
              </a>
              .
            </p>
          </Container>
        </div>
        <div className="DataPageSection whiteText">
          <Container>
            <h1>Data Concerns</h1>
            <p>
              If you have a concern or issue with this site or the data
              displayed on it please email{" "}
              <a href="mailto:phl.landlord.spotter@gmail.com">
                phl.landlord.spotter@gmail.com
              </a>
              .
            </p>
          </Container>
        </div>
      </Container>
    </div>
  );
}
