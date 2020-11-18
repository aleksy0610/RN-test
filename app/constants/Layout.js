import { Dimensions, Platform, PixelRatio } from 'react-native';

const baseWidth = 375;
const { width, height } = Dimensions.get('window');
const scale = width / baseWidth;

export const normalizeSize = (size) => {
	const newSize = size * scale;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}

	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const window = { width, height };
export const iconSize = {
	small: 12,
	medium: normalizeSize(21),
};
export const borderRadius = {
	small: 4,
	button: 10,
	medium: 15
};
export const fontSize = {
	title: 18,
	medium: 15,
	xmedium: 16,
	medium: 17
};

export const paddingSize = {
	small: 5,
	item: 10,
	button: 15,
	container: 20,
	medium: normalizeSize(28),
	sLarge: normalizeSize(50),
	large: normalizeSize(70)
};

export const sizes = {
	itemSize: normalizeSize(56),
	inputBox: normalizeSize(48),
}

export const opacity = {
	button: 0.6
};
