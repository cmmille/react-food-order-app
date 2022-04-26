import Modal from "../../UI/Modal/Modal";

const OrderConfirmedModal = (props) => {

  function clickHandler() {
    props.onClick()
  }

  return (
    <Modal onClick={clickHandler}>
      <h2>Order confirmed!</h2>
      <p>Your fooce will be there soon!</p>
    </Modal>
  );
};

export default OrderConfirmedModal