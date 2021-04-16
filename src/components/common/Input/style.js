import { StyleSheet } from 'react-native';
import colours from '../../../assets/themes/colours';

export default StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 9,
        marginTop: 5,
        paddingHorizontal: 15
    },

    error: {
        color: colours.danger,
        paddingTop: 4,
        fontSize: 13
    }
})