import Item from "../components/Item";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const ItemsPage = () => {
  const { category, subcategory } = useParams();
  const items = [
    {
      id: 1,
      name: "Cowboy Hat",
      image: "https://i.ebayimg.com/images/g/YpkAAOSwlsNfWsBJ/s-l1200.jpg",
      price: 79.99,
    },
    {
      id: 2,
      name: "Western Boots",
      image:
        "https://durangoboots.com/cdn/shop/files/DDB0342_gray_main_1400x1400_db5787b4-4c5d-4eeb-b0e8-6c85d1743eb2.jpg?v=1752874348",
      price: 149.99,
    },
    {
      id: 3,
      name: "Shirt",
      image:
        "https://www.vaqueroboots.com/cdn/shop/files/khaki.jpg?v=1762440448&width=2048",
      price: 106.09,
    },
  ];

  const displaySubCategoryTitle = subcategory
    ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
    : category;

  let displayCategoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1);

  console.log(displayCategoryTitle);

  if (displayCategoryTitle === "Mens" || displayCategoryTitle === "Womens") {
    displayCategoryTitle = displayCategoryTitle.replace("s", "'s");
  } else {
    displayCategoryTitle = "";
  }

  console.log(`${category}/${subcategory}`);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        {displayCategoryTitle} {displaySubCategoryTitle} Collection
      </h2>

      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <div className="row g-4">
            {items.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <Item {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
