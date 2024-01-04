import AvailableFoods from "./AvailableFoods";
import FoodsSummary from "./FoodsSummary";

const Foods = (props) => {
  return (
    <section>
      <FoodsSummary />
      <AvailableFoods />
    </section>
  );
};

export default Foods;
