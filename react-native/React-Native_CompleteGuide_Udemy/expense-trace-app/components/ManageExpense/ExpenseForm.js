import { View } from "react-native";
import Input from "./Input";


const ExpenseForm = () => {

    const amountChangeHandler = () => {

    }

    return (
        <View>
            <Input label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler,
            }}/>
            <Input label="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }} />
            <Input label="Description" textInputConfig={{
                multiline: true,
                // autocorrect: false //default is true
                // autoCapitalize: 'none'
                
            }}/>
        </View>
    );
};

export default ExpenseForm;