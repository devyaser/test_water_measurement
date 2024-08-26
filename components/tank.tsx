import { ImageBackground, StyleSheet, Text, View } from "react-native"
import TankBg from '../assets/tankBackground.png';

type Props = {
    value: number;
    tab: string;
}

const Tank = ({ value, tab }: Props) => {

    const icon = tab === "Volume" ? "ml" : "%";

    return (
        <View style={styles.tankContainer}>
            <ImageBackground source={TankBg} resizeMode="cover" style={styles.tankBorder1}>
                <View style={styles.tankBorder2}>
                    <Text style={styles.percentageText}>{`${value} ${icon}`}</Text>
                    <View style={[styles.tank, { height: `${value}%` }]}>
                        {value > 20 && value < 90 ? (
                            <View style={styles.waterTopCurve} />
                        ) : null}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Tank;

const styles = StyleSheet.create({
    tankContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 42,
        height: 180,
    },
    tank: {
        width: 240,
        backgroundColor: '#add8e6',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
        position: 'relative',
    },
    waterTopCurve: {
        position: 'absolute',
        top: -10,
        width: '100%',
        height: 40,
        backgroundColor: '#add8e6',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 20,
        transform: [{ rotate: '5deg' }],
    },
    tankBorder1: {
        height: 240,
        paddingHorizontal: 4,
        paddingBottom: 4,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tankBorder2: {
        height: 210,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderWidth: 2,
        borderTopWidth: 0,
        borderBottomColor: 'lightgrey',
        borderLeftColor: 'lightgrey',
        borderRightColor: 'lightgrey',
        borderTopColor: '#fff',
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
    },
    percentageText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        position: 'absolute',
        top: 20,
        zIndex: 4,
    },
})