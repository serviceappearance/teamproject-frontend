// import PaymentInfoModal from "../BargainSale/PaymentInfoModal";
// import { Link } from "react-router-dom";
import BigButton from "../../common/BigButton";
import { ReactComponent as BagIcon } from "../../../assets/icons/shopping-bag.svg";
export default function AlertModal({ isOpen, toggleModal, onConfirm }) {
  return (
    <div className={`style-modal ${isOpen ? "open" : ""}`}>
      <div style={alertTitleStyle} className="font-alert-title">
        예약 전 주의사항 알림
      </div>
      <div className="font-alert-content">
        <BagIcon />
        &ensp; 상품 가방에 담긴 음식은 랜덤입니다
      </div>
      <div style={alertDetailStyle} className="font-alert-detail">
        가방에는 해당 가게의 재고 상품이 담겨있습니다.
        <br />
        알레르기나 특정 재료에 대한 확인이 필요하면
        <br />
        가게에 문의 부탁드립니다.
        <br />
      </div>
      <div style={buttonSectionStyle}>
        <BigButton width={"297px"} text={"확인했습니다"} onClick={onConfirm} />
        <BigButton
          width={"297px"}
          text={"가게 정보보기"}
          onClick={toggleModal}
        />
      </div>
    </div>
  );
}

const alertTitleStyle = {
  height: "28px",
  margin: "24px 0 17px 0",
};

const alertDetailStyle = {
  display: "grid",
  placeItems: "center",
  margin: "15px 0 0 0",
};

const buttonSectionStyle = {
  display: "grid",
  placeItems: "center",
  gap: "6px",
  margin: "19px 0 0 0",
};
