import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
};
export default SubTitle;

const styles = StyleSheet.create({
    subtitleContainer : {
        borderBottomColor: '#ba9279',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4
    },
    subTitle: {
        color: '#ba9279',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});