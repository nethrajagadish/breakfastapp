import { useEffect, useState } from "react";
import classes from "./AvailableFoods.module.css";
import FoodItem from "./FoodItem/FoodItem";
import ItemCard from "../UI/ItemCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(
        "https://myfoodapp-7c513-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const responseData = await response.json();
      const loadedFoods = [];
      for (const key in responseData) {
        loadedFoods.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setFoods(loadedFoods);
      setIsLoading(false);
    };
    fetchFoods().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={classes["loading-container"]}>
        <div className={classes["loading-circle"]}></div>
        <div className={classes["loading-circle"]}></div>
        <div className={classes["loading-circle"]}></div>
      </div>
    );
  }
  if (httpError) {
    return (
      <section className={classes.Foodserror}>
        <p>{httpError}</p>
      </section>
    );
  }

  const FoodsList = foods.map((food) => (
    <ItemCard key={food.id}>
      <FoodItem
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        price={food.price}
        image={food.image}
      />
    </ItemCard>
  ));
  return <section className={classes.foods}>{FoodsList}</section>;
};

export default AvailableFoods;
