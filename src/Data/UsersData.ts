import {faker} from '@faker-js/faker';

type PersonType = {
    image:string
    firstname:string
    lastname:string
    email:string
    status:boolean
    count:number
}

export const  createRandomUser= ():PersonType => {
    return {
        image: faker.internet.avatar(),
        email: faker.internet.email(),
        firstname: faker.person.firstName(),
        lastname:faker.person.lastName(),
        status:faker.datatype.boolean(),
        count:faker.number.int({ min: 100, max: 200 })
    }
}

export const USERS = faker.helpers.multiple(createRandomUser, {
    count:30,
})