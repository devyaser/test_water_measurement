import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
    value: number;
    onChangeText: any;
    tab: string;
}

const Footer = ({ value, onChangeText, tab }: Props) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Source Minimum</Text>
            <View style={styles.footerValue}>
                <TextInput
                    style={styles.input}
                    value={value.toString()}
                    onChangeText={onChangeText}
                    editable={false}
                />
                <Text style={styles.footerValueText}>{tab === "Volume" ? "ml" : "%"}</Text>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingVertical: 16
    },
    footerText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 20
    },
    footerValue: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerValueText: {
        fontSize: 18,
        marginHorizontal: 5,
    },
    input: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#F1F1F3"
    }
})