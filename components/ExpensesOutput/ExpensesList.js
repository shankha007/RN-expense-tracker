import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return (
    <ExpenseItem
      description={itemData.item.description}
      date={itemData.item.date}
      amount={itemData.item.amount}
    />
  );
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(expense) => expense.id}
    />
  );
}

export default ExpensesList;
