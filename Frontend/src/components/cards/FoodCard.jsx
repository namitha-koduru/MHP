import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FoodCard = ({ item, onAdd }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-card rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div className="flex flex-col gap-3">

        <h3 className="text-lg font-semibold text-foreground">
          {item.name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {item.category}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-primary font-bold text-lg">
            ₹{item.price}
          </span>

          <Button
            onClick={() => onAdd(item)}
            className="rounded-full px-5 bg-primary hover:bg-accent text-primary-foreground transition-all duration-300"
          >
            Add
          </Button>

        </div>

      </div>
    </motion.div>
  );
};

export default FoodCard;