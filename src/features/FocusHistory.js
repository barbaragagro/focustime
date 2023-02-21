import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.noFocusYet}>
        You haven't focused on anything yet!
      </Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.md,
  },
  item: {
    fontSize: sizes.md,
    color: colors.white,
    paddingTop: sizes.sm,
  },
  title: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: 'bold',
  },
  noFocusYet: {
    padding: sizes.md,
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: 'bold',
  },
});
