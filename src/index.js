function isNotColapsed (rectangle) {

	if (rectangle.height <= 0 || rectangle.width <= 0) {
		return false;
	}

	return true;
}

export function areIntersected (firstRectangle, secondRectangle) {
	let firstOrdinateBeginning = firstRectangle.top;
	let fisrtAbscissaBeginning = firstRectangle.left;
	let firstOrdinateEnd = firstRectangle.height + firstRectangle.top;
	let fisrtAbscissaEnd = firstRectangle.width + firstRectangle.left;
	let secondOrdinateBeginning = secondRectangle.top;
	let secondAbscissaBeginning = secondRectangle.left;
	let secondOrdinateEnd = secondRectangle.height + secondRectangle.top;
	let secondAbscissaEnd = secondRectangle.width + secondRectangle.left;

	if (((fisrtAbscissaBeginning <= secondAbscissaBeginning && secondAbscissaBeginning < fisrtAbscissaEnd)
	|| (secondAbscissaBeginning <= fisrtAbscissaBeginning && fisrtAbscissaBeginning < secondAbscissaEnd))
	&& ((firstOrdinateBeginning <= secondOrdinateBeginning && secondOrdinateBeginning < firstOrdinateEnd)
	|| (secondOrdinateBeginning <= firstOrdinateBeginning && firstOrdinateBeginning < secondOrdinateEnd))) {
		return true;
	}
	return false;
}

export function filterVisible (maternalRectangle, rectangleArray) {
	let resultRectangleArray = [];

	if (isNotColapsed(maternalRectangle)) {
		resultRectangleArray = rectangleArray
			.filter(isNotColapsed)
			.filter(rectangle => areIntersected(maternalRectangle, rectangle));

		return resultRectangleArray;
	}

	return resultRectangleArray;
}