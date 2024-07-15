import "../common.css";
import FilterCategoryIcon from "../common/FilterCategoryIcon";
import MenuBar from "../common/MenuBar";
import SearchBar from "../common/SearchBar";
import CategoryBar from "./CategoryBar";
import StoreInfoCard from "./StoreInfoCard";

const storeInfo = {
  topPartValue: {
    storeName: "가게이름",
    Notification: "재고없음",
  },
  bottomPartValue: {
    title: "사장님 말씀",
    content: "내용",
    price: "10,000",
    discounted: "5,000",
    rating: "4.5",
    distance: "2km",
  },
};

const category = ["전체", "noShow", "마감할인", "찜"];

export default function MainPage({ storeInfo01 }) {
  return (
    <div className="style-page">
      <SearchBar />
      <CategoryBar category={category} />
      <div className="style-card-list">
        <StoreInfoCard
          topPartValue={storeInfo.topPartValue}
          bottomPartValue={storeInfo.bottomPartValue}
        />
        <StoreInfoCard
          topPartValue={storeInfo.topPartValue}
          bottomPartValue={storeInfo.bottomPartValue}
        />
        <StoreInfoCard
          topPartValue={storeInfo.topPartValue}
          bottomPartValue={storeInfo.bottomPartValue}
        />
        <StoreInfoCard
          topPartValue={storeInfo.topPartValue}
          bottomPartValue={storeInfo.bottomPartValue}
        />
      </div>
      <MenuBar />
    </div>
  );
}
