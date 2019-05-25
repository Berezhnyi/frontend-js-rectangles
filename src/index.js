function isLegalRectangle(rectangle){
	let dimention;
	for (dimention in rectangle) {
		// console.log(rectangle[dimention]);
		if(typeof rectangle[dimention] !== 'number'){
			return false;
		}
	}
	return true;
};

export function areIntersected(firstRectangle, secondRectangle){
	if(isLegalRectangle(firstRectangle) && isLegalRectangle(secondRectangle)){
		let firstTop = firstRectangle.top;
		let firstLeft = firstRectangle.left;
		let firstBottom = firstRectangle.height+firstRectangle.top;
		let firstRight = firstRectangle.width+firstRectangle.left;
		let secondTop = secondRectangle.top;
		let secondLeft = secondRectangle.left;
		let secondBottom = secondRectangle.height+secondRectangle.top;
		let secondRight = secondRectangle.width+secondRectangle.left;

		if((firstRight<secondLeft||firstLeft>secondRight)&&(firstBottom<secondTop||firstTop>secondBottom)){
			return false;
		}
		else if(firstTop===secondTop&&firstLeft===secondLeft){
			return true;
		} 



		else if((firstTop<=secondTop&&secondTop<=firstBottom)&&
			(firstLeft<=secondLeft&&secondLeft<=firstRight)){
				return true;
			}
		else if(firstLeft>secondRight||
			firstRight>secondLeft||
			firstTop<secondBottom||
			firstBottom>secondTop){
			return false;
		}
		return true;
		// if(firstRectangle.top<(secondRectangle.height+secondRectangle.top)||
		// (firstRectangle.height+firstRectangle.top)>secondRectangle.top){
		// 	return false;
		// } else if((firstRectangle.width+firstRectangle.left)<secondRectangle.top||
		// firstRectangle.top>(secondRectangle.width+secondRectangle.top)){
		// 	return false;
		// }
		// return true;
		// else if(){
		// 		return true;
		// 	};
		// 	return true;

			// (firstRectangle.top<(secondRectangle.height+secondRectangle.top)||
			// (firstRectangle.height+firstRectangle.top)>secondRectangle.top||
			// (firstRectangle.width+firstRectangle.left)<secondRectangle.top||
			// firstRectangle.top>(secondRectangle.width+secondRectangle.top))
		// return true;
		// return 
		//  a.y < b.y1 ||
		//  a.y1 > b.y ||
		//  a.x1 < b.x ||
		//  a.x > b.x1 
	}

return false;
};
export function filterVisible(maternalRectangle, rectangleArray){

};

let rectangleTest = {
	left: 0,
	top: 0,
	width: 20,
	height: 20
};
let rectangleTest2 = {
		left: 10,
		top: 10,
		width: 25,
		height: 25	 
};

// console.log(areIntersected(rectangleTest, rectangleTest2));

// isLegalRectangle(rectangleTest);
// let prop;
// for(prop in rectangleTest){
// 	console.log(rectangleTest[prop]);
// }

// isLegalRectangle({
// 	left: 0,
// 	top: 0,
// 	width: -20,
// 	height: 20
//  });