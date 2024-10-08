// import CategoryBar from "../main/CategoryBar";
import StoreInfoCard from "../main/StoreInfoCard";
import MenuBar from "../common/MenuBar";
import PageHeader from "../common/PageHeader";
export default function BookmarkListPage() {
  return (
    <div className="style-page">
      <PageHeader text={"찜 목록"} />
      <div className="style-card-list" style={{ margin: "10px 0 0 0" }}>
        {storeInfo.map((info, index) => (
          <StoreInfoCard
            key={index}
            id={info.storeId}
            topPartValue={info.topPartValue}
            bottomPartValue={info.bottomPartValue}
          />
        ))}
      </div>
      <MenuBar />
    </div>
  );
}

const storeInfo = [
  {
    storeId: 1,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
  {
    storeId: 2,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
  {
    storeId: 3,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
  {
    storeId: 4,
    topPartValue: {
      Notification: "재고없음",
    },
    bottomPartValue: {
      title: "가게명",
      discounted: "5,000",
      rating: "4.5",
      distance: "2km",
    },
  },
];
