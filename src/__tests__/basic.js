import sortCharacter from '../index'

test("check", () => {
    expect(2).toBe(2)
})

test("sort list Character", () => {
    const listCharacter = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]
    const listCharacterSort = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    expect(sortCharacter(listCharacter)).toEqual(listCharacterSort)
})