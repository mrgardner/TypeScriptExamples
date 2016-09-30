setItem(key) // should create a new key-value pair

getItem(key) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs

    const numberMap = new MyMap;
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap;
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
