import React, {Component} from "react";
import { Breadcrumb, Button,Navbar, Nav ,NavDropdown, Form, FormControl, Col, Container, Row, Table, Tabs, Tab, ProgressBar, Pagination, Popover, OverlayTrigger, Collapse} from "react-bootstrap";



class App extends Component{
  constructor(props){
    super(props)
    this.state={
      a:85,
      b:55,
      c:95,
      d:100,
      e:50,
      f:100,
      buka:false
    }
  }
  render(){
    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Informasi Website</Popover.Header>
        <Popover.Body>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
        </Popover.Body>
      </Popover>
    );
    
    return(
      
      <Container fluid="xxl">

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
        <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Berita</Nav.Link>
          <Nav.Link href="/">Live Scores</Nav.Link>
            <NavDropdown title="Piala&Liga" id="collasible-nav-dropdown">
            <NavDropdown.Item>Liga Primer Inggris</NavDropdown.Item>
            <NavDropdown.Item>Serie A</NavDropdown.Item>
            <NavDropdown.Item>Divisi Primera</NavDropdown.Item>
            <NavDropdown.Item>Bundesliga</NavDropdown.Item>
            <NavDropdown.Item>Liga 1 Indonesia</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Transfer Pemain</Nav.Link>
            <Nav.Link href="/">Tim</Nav.Link>
          </Nav>
          <Nav>
          <Form className="d-flex end">
              <FormControl type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" ></FormControl>
              <Button variant="outline-primary">Search</Button>
        </Form>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      <br></br>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item href="/" active>Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
          </Col>
        </Row>
        <h3>Rumor Transfer Pemain</h3>
        <br></br>
        <Tabs>
          <Tab eventKey="Semua Transfer" title="Semua Transfer">
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar striped now={this.state.a} label={`${this.state.a}%`} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar striped now={this.state.b} label={`${this.state.b}%`} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar striped now={this.state.c} label={`${this.state.c}%`} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT</td>
                  <td><ProgressBar striped now={this.state.d} label={`${this.state.d}%`} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar striped now={this.state.e} label={`${this.state.e}%`} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar striped now={this.state.f} label={`${this.state.f}%`} /></td>
                </tr>
              </tbody>
              
            </Table>
          </Tab>
          <Tab eventKey="Liga Primer Inggris" title="Liga Primer Inggris">
          <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar striped now={this.state.a} label={`${this.state.a}%`} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar striped now={this.state.b} label={`${this.state.b}%`} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar striped now={this.state.c} label={`${this.state.c}%`} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT</td>
                  <td><ProgressBar striped now={this.state.d} label={`${this.state.d}%`} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar striped now={this.state.e} label={`${this.state.e}%`} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar striped now={this.state.f} label={`${this.state.f}%`} /></td>
                </tr>
              </tbody>
              
            </Table>
          </Tab>
          <Tab eventKey="Serie A" title="Serie A">
          <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar striped now={this.state.a} label={`${this.state.a}%`} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar striped now={this.state.b} label={`${this.state.b}%`} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar striped now={this.state.c} label={`${this.state.c}%`} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT</td>
                  <td><ProgressBar striped now={this.state.d} label={`${this.state.d}%`} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar striped now={this.state.e} label={`${this.state.e}%`} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar striped now={this.state.f} label={`${this.state.f}%`} /></td>
                </tr>
              </tbody>
              
            </Table>
          </Tab>
          <Tab eventKey="Divisi Primera" title="Divisi Primera">
          <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar striped now={this.state.a} label={`${this.state.a}%`} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar striped now={this.state.b} label={`${this.state.b}%`} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar striped now={this.state.c} label={`${this.state.c}%`} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT</td>
                  <td><ProgressBar striped now={this.state.d} label={`${this.state.d}%`} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar striped now={this.state.e} label={`${this.state.e}%`} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar striped now={this.state.f} label={`${this.state.f}%`} /></td>
                </tr>
              </tbody>
              
            </Table>

          </Tab>
          <Tab eventKey="Bundesliga" title="Bundesliga">
          <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar striped now={this.state.a} label={`${this.state.a}%`} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar striped now={this.state.b} label={`${this.state.b}%`} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar striped now={this.state.c} label={`${this.state.c}%`} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT</td>
                  <td><ProgressBar striped now={this.state.d} label={`${this.state.d}%`} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar striped now={this.state.e} label={`${this.state.e}%`} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar striped now={this.state.f} label={`${this.state.f}%`} /></td>
                </tr>
              </tbody>
              
            </Table>

          </Tab>
          <Tab eventKey="Liga 1 Indonesia" title="Liga 1 Indonesia">
          <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar striped now={this.state.a} label={`${this.state.a}%`} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar striped now={this.state.b} label={`${this.state.b}%`} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar striped now={this.state.c} label={`${this.state.c}%`} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT</td>
                  <td><ProgressBar striped now={this.state.d} label={`${this.state.d}%`} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar striped now={this.state.e} label={`${this.state.e}%`} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td><ProgressBar striped now={this.state.f} label={`${this.state.f}%`} /></td>
                </tr>
              </tbody>
              
            </Table>

          </Tab>
        
          
        </Tabs>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <br></br>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="primary">Informasi</Button>
    </OverlayTrigger>
    
      <Button variant="primary" onClick={()=>this.setState({buka:!this.state.buka})}>Versi Website</Button>
      <div placement="right">
      <Collapse in={this.state.buka}>
      <p>Akses Sport V1.0</p>
      </Collapse>
      </div>
      
      </Container>

     

      </Container>
    );
  }
}

export default App;
