import { StyleSheet } from 'react-native';
import colours from '../../../assets/themes/colours';

export default StyleSheet.create({
    container: {
        // height: 40,
        borderWidth: 1,
        borderRadius: 9,
        alignItems: 'center',
        marginTop: 5,
    },

    error: {
        color: colours.danger,
        paddingTop: 4,
        fontSize: 13
    }
})