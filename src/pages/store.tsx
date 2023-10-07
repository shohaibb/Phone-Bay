import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem";

export function Store() {
  // iPhones start from index 0 to index 5 (inclusive)
  const iPhones = storeItems.slice(0, 6);

  // Android phones start from index 6 to the end
  const androidPhones = storeItems.slice(6);

  return (
    <>
      <h1 style={{ fontSize: '38px', marginBottom: '20px' }}>iPhone</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {iPhones.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>

      <h2 style={{ fontSize: '38px', marginTop: '20px', marginBottom: '20px' }}>Android</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {androidPhones.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
