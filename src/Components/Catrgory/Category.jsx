import "./Category.css";
import Item from "../Item/Item";

const Category = (props) => {
  return (
    <div className="category">
      {/* <img src={props.banner} alt="" /> */}
      <div className="category-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src="" alt="" />
        </div>
      </div>
      <div className="category_products">
        {props.product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.title}
                new_price={item.price}
                old_price={100}
                addtocart={props.addtocart}
              />
            );
          }
        })}
      </div>
      <div className="category_loadmore">Explore More</div>
    </div>
  );
};

export default Category;
