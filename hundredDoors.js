'use strict';
const Door = {
    _collection: [],
    create(number) {
        const door = Object.create({
            applyDoorEvent(doorNumber) {
                if (this.num % doorNumber === 0) {
                    this.isOpen = !this.isOpen;
                }
            }
        }, {
            num: { writable: true, value: number, enumerable: true},
            isOpen: { writable: true, value: false, enumerable: true }
        });
        Door._collection.push(door);
        return door;
    },
    applyDoorEvent(doorNumber) {
        for (const door of Door._collection) {
            door.applyDoorEvent(doorNumber);
        }
    }
}

function magic(doors) {
    doors = doors.map(Door.create);

    for (const door of doors) {
        door.isOpen = !door.isOpen;
        Door.applyDoorEvent(door.num);
    }

    return doors
        .filter((door) => door.isOpen)
        .map((door) => door.num);
}

console.log(magic([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33]));
console.log(magic([1, 2, 3, 4]));
