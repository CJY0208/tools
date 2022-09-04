const isNaN = (value: any): value is typeof NaN => value !== value

export default isNaN
