import { Image, StyleSheet, View, Dimensions } from "react-native";
import Slider from '@react-native-community/slider';
import Indicator from '../assets/Indicator.png';
import Thumb from '../assets/thumb.png';
import { useMemo } from "react";

type Props = {
    value: number;
    setValue: any;
}

const SliderContainer = ({ value, setValue }: Props) => {

    const bottomVal = useMemo(() => {
        if (value <= 100) {
            let adjustment = 0;
            if (value <= 5) {
                return value + 15;
            } else if (value > 5 && value <= 60) {
                adjustment = 10;
            } else if (value > 60 && value < 90) {
                adjustment = 5;
            }

            return value + value + adjustment;
        }
        return value;
    }, [value]);


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
                thumbImage={Thumb}
            >
                <View style={{ bottom: 40, left: bottomVal, position: 'absolute', height: 280, backgroundColor: '#30324E' }}>
                    <Image source={Indicator} />
                </View>
            </Slider>
        </View>
    )
}

export default SliderContainer;


const styles = StyleSheet.create({
    container: {
        height: 220,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    slider: {
        width: 220,
        height: 100,
        transform: [{ rotate: '-90deg' }],
    },
})