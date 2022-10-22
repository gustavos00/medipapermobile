
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,

        display: "flex",
        justifyContent: 'center',

        paddingLeft: 30,
        marginBottom: 10,
    },

    highlightedContainer: {
        width: '100%',
        height: 120,

        display: "flex",
        justifyContent: 'center',

        paddingLeft: 30,
        marginBottom: 10,

        backgroundColor: '#363740',
    },

    mostRecentAppointmentHighlightedLabel: {
        fontSize: 30,
        color: '#fff',
    },

    mostRecentAppointmentUnlightedLabelLabel: {
        fontSize: 20,
        color: '#fff',
    },
    
    highlightedLabel: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    unlightedLabel: {
        fontSize: 18,
    }
});
