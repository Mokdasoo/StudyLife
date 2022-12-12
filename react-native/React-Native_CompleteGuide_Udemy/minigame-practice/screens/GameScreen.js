import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomBetween = (min, max, exclude) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }else {
        return randomNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(true);
        }
    }, [currentGuess, userNumber, onGameOver]);


    const nextGuessHandler = (direction) => { // direction => 'lower' or 'greater'
        if ( 
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)
            ){
                Alert.alert("Don't lie!", "You know that this is wrong...", [
                    {text: 'Sorry!', style: 'cancel'}
                ]);
                return;
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess - 1;
        }else{
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or lower?</InstructionText>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </Card>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});