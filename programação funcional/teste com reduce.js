const array = [1,2,3,4,5]
array.reduce((min,cur)=> {
	console.log(min,cur)
	return min + cur
})

