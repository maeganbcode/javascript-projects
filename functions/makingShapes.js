function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
return line;
}

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i ++) {
        square += makeLine(size);
        if (i < size -1) {
            square += '\n';
        }
    }
return square;
}
console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i ++) {
        rectangle += (makeLine(width) + '\n');
        }
    
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i ++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' '.repeat(numSpaces);
    let hashes = '#'.repeat(numChars);
    return spaces + hashes + spaces;

}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

function reverse(text) {
    return text.split('/n').reverse().join('\n');
}
function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1) + '\n';
    }
    return triangle.slice(0, -1); // Remove the last newline character
}

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' '.repeat(numSpaces);
    let hashes = '#'.repeat(numChars);
    return spaces + hashes + spaces;
}
function makeDiamond(height) {
    let topTriangle = makeIsoscelesTriangle(height);
    let bottomTriangle = reverse(topTriangle); 
    return topTriangle + '\n' + bottomTriangle;
}
function reverse(text) {
    return text.split('\n').reverse().join('\n');
}
console.log(makeDiamond(5));