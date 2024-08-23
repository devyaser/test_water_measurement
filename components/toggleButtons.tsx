import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    tab: string;
    onTabChange: any;
}

const ToggleButtons = ({ tab, onTabChange }: Props) => {

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity
                style={[styles.tab, tab === 'Percentage' && styles.activeTab]}
                onPress={() => onTabChange('Percentage')}>
                <Text
                    style={styles.tabText}>
                    PERCENTAGE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tab, tab === 'Volume' && styles.activeTab]}
                onPress={() => onTabChange('Volume')}>
                <Text
                    style={styles.tabText}>
                    VOLUME
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToggleButtons;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#BCE5FF',
        borderRadius: 20,
        padding: 2
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 5,
    },
    activeTab: {
        backgroundColor: '#BCE5FF',
    },
    tabText: {
        color: '#333',
    },
});