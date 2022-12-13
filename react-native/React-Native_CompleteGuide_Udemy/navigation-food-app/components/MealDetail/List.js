import { View, Text, StyleSheet } from "react-native";

const List = ({data}) => {
    return (
        data.map((dataPoint) => (
            <View style={styles.listItem} key={dataPoint}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        ))
    );
};
export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#ba9279'
    },
    itemText: {
        color: '#3f2f25',
        textAlign: 'center'
    }
});