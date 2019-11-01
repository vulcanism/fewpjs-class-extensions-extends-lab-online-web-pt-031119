class Polygon {
  constructor(array) {
    this.array = array
  }

    get countSides() {
      return this.array.length
    }

    get perimeter() {
      return this.array.reduce((a,b) => a + b, 0)
    }
}

class Triangle extends Polygon {
  get isValid() {
    const pair1 = this.array[0] + this.array[1]
    const pair2 = this.array[1] + this.array[2]
    const pair3 = this.array[0] + this.array[2]

    if (pair1 > this.array[2] && pair2 > this.array[0] && pair3 > this.array[1]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== this.array[0]) {
                return false
            }
        }
        return true
  }

  get area() {
    return this.array[0] * this.array[1]
  }
}
