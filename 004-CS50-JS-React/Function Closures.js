function outerFunc(outerVar) {
    // innerFunc('in')
    function innerFunc(innerVar) {
        console.log("Outer Variable: " + outerVar)
        console.log("Inner Variable: " + innerVar)
    }
    return innerFunc
}

// outerFunc('out')
outerFunc('out')('in')
// const newFunc = outerFunc('out')
// newFunc('in')