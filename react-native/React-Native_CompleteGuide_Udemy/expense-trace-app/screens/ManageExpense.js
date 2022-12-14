import {  StyleSheet, TextInput, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({route, navigation}) => {
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    const deleteExpenseHandler = () => {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }
    const cancelHandler = () => {
        navigation.goBack();
    }
    const confirmHandler = () => {
        if(isEditing){
            expensesCtx.updateExpense(
                editedExpenseId,
                {
                    description: 'test!!!!', 
                    amount: 29.99, 
                    date: new Date('2022-12-14'),
                }
            );
        }else{
            expensesCtx.addExpense(
                {
                    description: 'test', 
                    amount: 19.99, 
                    date: new Date('2022-12-13'),
                }
            );
        }
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.buttons}>
                <CustomButton style={styles.button} mode="flat" onPress={cancelHandler} >Cancel</CustomButton>
                <CustomButton style={styles.button} onPress={confirmHandler}>{ isEditing ? 'Update' : 'Add' }</CustomButton>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton 
                        icon='trash' 
                        color={GlobalStyles.colors.error500} 
                        size={36} 
                        onPress={deleteExpenseHandler} 
                    />
                </View>
            )}
        </View>
    );
};
export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});