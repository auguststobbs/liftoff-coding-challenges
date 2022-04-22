function minMax(arr) {
	arr.sort(function(a,b){return a-b}).splice(1,arr. length-2);
	return arr;
}