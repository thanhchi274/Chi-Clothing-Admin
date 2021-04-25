import React, { Component } from "react";
// import images
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardImg,
  CardText,
  Container,
  Media,
} from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class UiImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "UI Elements", link: "#" },
        { title: "Images", link: "#" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Images"
              breadcrumbItems={this.state.breadcrumbItems}
            />

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Image Rounded & Circle</h4>
                    <p className="card-title-desc">
                      Use classNames <code>.rounded</code> and{" "}
                      <code>.rounded-circle</code>.
                    </p>
                    <Row>
                      <Col md={6}>
                        <img
                          className="rounded mr-2"
                          alt="Thanh Chi Clothing"
                          width="200"
                          src={img4}
                        />
                      </Col>
                      <Col md={6}>
                        <div className="mt-4 mt-md-0">
                          <img
                            className="rounded-circle avatar-xl"
                            alt="Thanh Chi Clothing"
                            src={null}
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Image thumbnails</h4>
                    <p className="card-title-desc">
                      In addition to our border-radius utilities, you can use{" "}
                      <code className="highlighter-rouge">.img-thumbnail</code>{" "}
                      to give an image a rounded 1px border appearance.
                    </p>
                    <Row>
                      <Col md={6}>
                        <img
                          className="img-thumbnail"
                          alt="Thanh Chi Clothing"
                          width="200"
                          src={img3}
                        />
                      </Col>
                      <Col md={6}>
                        <div className="mt-4 mt-md-0">
                          <img
                            className="img-thumbnail rounded-circle avatar-xl"
                            alt="Thanh Chi Clothing"
                            src={null}
                          />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col xl={6}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Responsive images</h4>
                    <p className="card-title-desc">
                      Images in Bootstrap are made responsive with{" "}
                      <code className="highlighter-rouge">.img-fluid</code>.{" "}
                      <code className="highlighter-rouge">
                        max-width: 100%;
                      </code>{" "}
                      and{" "}
                      <code className="highlighter-rouge">height: auto;</code>{" "}
                      are applied to the image so that it scales with the parent
                      element.
                    </p>
                    <CardImg
                      className="img-fluid"
                      src={img2}
                      alt="Thanh Chi Clothing"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <h4 className="card-title mb-4">Image Sizes</h4>
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col lg={4}>
                            <CardImg
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="rounded avatar-sm"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-sm</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="rounded avatar-md"
                            />
                            <CardText className="mt-2  mb-lg-0">
                              <code>.avatar-md</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="rounded avatar-lg"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-lg</code>
                            </CardText>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col lg={4}>
                            <CardImg
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="rounded-circle avatar-sm"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-sm</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="rounded-circle avatar-md"
                            />
                            <CardText className="mt-2  mb-lg-0">
                              <code>.avatar-md</code>
                            </CardText>
                          </Col>
                          <Col lg={4}>
                            <CardImg
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="rounded-circle avatar-lg"
                            />
                            <CardText className="mt-2 mb-lg-0">
                              <code>.avatar-lg</code>
                            </CardText>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Default media object</h4>
                    <p className="card-title-desc">
                      The default media displays a media object (images, video,
                      audio) to the left or right of a content block.
                    </p>

                    <Media className="mb-4">
                      <img
                        className="avatar-sm mr-3 rounded-circle"
                        src={null}
                        alt="Thanh Chi Clothing"
                      />
                      <Media body>
                        <h5 className="mt-0 font-size-14">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </Media>
                    </Media>

                    <Media className="mb-4">
                      <img
                        className="avatar-sm mr-3 rounded-circle"
                        src={null}
                        alt="Thanh Chi Clothing"
                      />
                      <Media body>
                        <h5 className="mt-0 font-size-14">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                        <Media className="mt-3">
                          <Link className="pr-3" to="#">
                            <img
                              src={null}
                              alt="Thanh Chi Clothing"
                              className="avatar-sm rounded-circle"
                            />
                          </Link>
                          <Media body>
                            <h5 className="mt-0 font-size-14">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                          </Media>
                        </Media>
                      </Media>
                    </Media>

                    <Media>
                      <Media body>
                        <h5 className="mt-0 mb-1 font-size-14">Media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </Media>
                      <img
                        className="avatar-sm ml-3 rounded-circle"
                        src={null}
                        alt="Thanh Chi Clothing"
                      />
                    </Media>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Media alignment</h4>
                    <p className="card-title-desc">
                      The images or other media can be aligned top, middle, or
                      bottom. The default is top aligned.
                    </p>

                    <Media className="mb-4">
                      <img
                        className="avatar-sm align-self-start rounded mr-3"
                        src={null}
                        alt="Thanh Chi Clothing"
                      />
                      <Media body>
                        <h5 className="mt-0 font-size-14">Top-aligned media</h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                        <p className="mb-0">
                          Donec sed odio dui. Nullam quis risus eget urna mollis
                          ornare vel eu leo. Cum sociis natoque penatibus et
                          magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </Media>
                    </Media>

                    <Media className="mb-4">
                      <img
                        className="avatar-sm align-self-center rounded mr-3"
                        src={null}
                        alt="Thanh Chi Clothing"
                      />
                      <Media body>
                        <h5 className="mt-0 font-size-14">
                          Center-aligned media
                        </h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                        <p className="mb-0">
                          Donec sed odio dui. Nullam quis risus eget urna mollis
                          ornare vel eu leo. Cum sociis natoque penatibus et
                          magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </Media>
                    </Media>

                    <Media>
                      <img
                        className="avatar-sm align-self-end rounded mr-3"
                        src={null}
                        alt="Thanh Chi Clothing"
                      />
                      <Media body>
                        <h5 className="mt-0 font-size-14">
                          Bottom-aligned media
                        </h5>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                          Fusce condimentum nunc ac nisi vulputate fringilla.
                          Donec lacinia congue felis in faucibus.
                        </p>
                        <p className="mb-0">
                          Donec sed odio dui. Nullam quis risus eget urna mollis
                          ornare vel eu leo. Cum sociis natoque penatibus et
                          magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default UiImages;
