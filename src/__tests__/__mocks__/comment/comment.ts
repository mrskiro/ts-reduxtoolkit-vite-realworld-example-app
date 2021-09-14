import * as Entities from '~/entities'

export const comment1: Entities.Comment = {
    id: '1',
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:22:56.637Z',
    body: 'It takes a Jacobian',
    author: {
        username: 'jake',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false
    }
}

export const comment2: Entities.Comment = {
    id: '2',
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:22:56.637Z',
    body: 'It takes a Jacobian2',
    author: {
        username: 'jake',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false
    }
}
