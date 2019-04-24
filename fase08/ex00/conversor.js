function conversor(temp, de, para) {
    if (de === "celsius" && para === "fahrenheit")
        return Math.ceil(temp * 1.8 + 32);
    else if (de === "fahrenheit" && para === "celsius")
        return Math.ceil((temp - 32) / 1.8);
    else if (de === "celsius" && para === "kelvin")
        return Math.ceil(temp + 273.15);
    else if (de === "kelvin" && para === "celsius")
        return Math.ceil(temp - 273.15);
    else if (de === "kelvin" && para === "fahrenheit")
        return Math.ceil(temp  * 9/5 - 459.67);
     else if (de === "fahrenheit" && para === "kelvin")
        return Math.ceil((temp + 459.67) * 5/9);    
}