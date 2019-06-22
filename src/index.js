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

function areIntersectsParental (firstRectangle, secondRectangle) {
	let firstOrdinateBeginning = firstRectangle.top;
	let fisrtAbscissaBeginning = firstRectangle.left;
	let firstOrdinateEnd = firstRectangle.height + firstRectangle.top;
	let fisrtAbscissaEnd = firstRectangle.width + firstRectangle.left;
	let secondOrdinateBeginning = secondRectangle.top;
	let secondAbscissaBeginning = secondRectangle.left;

	if ((fisrtAbscissaBeginning <= secondAbscissaBeginning && secondAbscissaBeginning < fisrtAbscissaEnd)
	&& (firstOrdinateBeginning <= secondOrdinateBeginning && secondOrdinateBeginning < firstOrdinateEnd)) {
		return true;
	}

	return false;
}

export function filterVisible (maternalRectangle, rectangleArray) {
	let resultRectangleArray = [];

	if (isNotColapsed(maternalRectangle)) {
		resultRectangleArray = rectangleArray
			.filter(rectangle =>
				(areIntersectsParental(maternalRectangle, rectangle))
				&& isNotColapsed(rectangle));

		return resultRectangleArray;
	}

	return resultRectangleArray;
}

// console.log(filterVisible({
// 	left: 0, top: 0,
// 	width: 20, height: 20
//  }, [
// 	{
// 	   left: 10, top: 10,
// 	   width: 25,  height: 25
// 	},
// 	{
// 	   left: 15, top: 10,
// 	   width: 20,  height: 20
// 	},
// 	{
// 	   left: 10, top: 10,
// 	   width: 0,  height: 25
// 	},
// 	{
// 	   left: 100, top: 10,
// 	   width: 5,  height: 5
// 	}
//  ]));


// We can use the same code to check if the rectangle is legal (has not zero dimention or value not a number)

// export function areIntersected (firstRectangle, secondRectangle) {
// 	if (isLegalRectangle(firstRectangle) && isLegalRectangle(secondRectangle)) {
// 		let ay = firstRectangle.top;
// 		let ax = firstRectangle.left;
// 		let ay2 = firstRectangle.height + firstRectangle.top;
// 		let ax2 = firstRectangle.width + firstRectangle.left;
// 		let by = secondRectangle.top;
// 		let bx = secondRectangle.left;
// 		let by2 = secondRectangle.height + secondRectangle.top;
// 		let bx2 = secondRectangle.width + secondRectangle.left;

// 		if (((ax <= bx && bx < ax2) || (bx <= ax && ax < bx2)) && ((ay <= by && by < ay2) || (by <= ay && ay < by2))) {
// 			return true;
// 		}
// 	}

// 	return false;
// }