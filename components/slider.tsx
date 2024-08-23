import { StyleSheet, View } from "react-native";
import Slider from '@react-native-community/slider';
import { useEffect, useState } from "react";

type Props = {
    value: number;
    setValue: any;
}

const SliderContainer = ({ value, setValue }: Props) => {
    
    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={value}
                onValueChange={(val: number) => setValue(val)}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                thumbTintColor="#333"
            />
        </View>
    )
}

export default SliderContainer;


const styles = StyleSheet.create({
    container: {
        height: 250,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    slider: {
        width: 200,
        height: 100,
        transform: [{ rotate: '-90deg' }],
    },
})