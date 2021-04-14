import React from 'react';
import { FlatList } from 'react-native';
import styles from './styles';

function Container({ children, style }) {
    return (
        <FlatList
            data={[]}
            ListEmptyComponent={null}
            keyExtractor={() => "dummy"}
            renderItem={null}
            style={[styles.container, style]}
            ListHeaderComponent={() => (
                <React.Fragment>{children}</React.Fragment>
            )}
        />
    );
}

export default Container;