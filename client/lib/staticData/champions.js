import championsData from './champions.json'
import _ from 'lodash'

let champions = []

_.forIn(championsData.data, (champion, name) => {
    champions.push(champion)
})

console.log(champions)

export default champions