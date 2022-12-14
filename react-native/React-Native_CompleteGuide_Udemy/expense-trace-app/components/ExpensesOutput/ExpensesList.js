import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
    return (
        <ExpenseItem {...itemData.item}/>
    );
};

const ExpensesList = ({expenses}) => {
    return (
        <FlatList 
            data={expenses}
            renderItem={renderExpenseItem}
            key={(item) => item.id}
        />
    );
};
export default ExpensesList;