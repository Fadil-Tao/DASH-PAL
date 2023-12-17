import {faker} from '@faker-js/faker';

export interface PersonType {
    image:string
    fullName:string
    email:string
    status:boolean | string
    action?:any
    uuid:string
}



export const  createRandomUser= ():PersonType => {
    return {
        image: faker.internet.avatar(),
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        status:faker.datatype.boolean(),
        uuid:faker.string.uuid()
    }
}

export const USERS = faker.helpers.multiple(createRandomUser, {
    count:30,
})