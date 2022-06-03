class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		let comparisonOutput = other.name + " is ";
		
		if (this.age < other.age) {
			comparisonOutput += "older than"
		} else if (this.age > other.age) {
		comparisonOutput += "younger than"
		} else {
			comparisonOutput += "the same age as"
		}
		comparisonOutput += " me."
		
		return comparisonOutput;
		
		
	}
}