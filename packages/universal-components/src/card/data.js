import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from '@kkemple/react-primitives';

const Card = ({ image, title, subtitle, style }) => (
  <View style={[styles.container, style]}>
    <Image style={styles.image} source={image} />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
);

Card.propTypes = {
  image: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  subtitle: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 450,
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    width: 300,
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 8,
  },
});
