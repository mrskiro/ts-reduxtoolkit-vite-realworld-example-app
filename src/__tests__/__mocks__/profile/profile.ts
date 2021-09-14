import * as Entities from '~/entities'

export const profile: Entities.Profile = {
    username: 'jake',
    bio: 'I work at statefarm',
    image: 'https://i.stack.imgur.com/xHWG8.jpg',
    following: false
}

export const followedProfile: Entities.Profile = {
    username: 'jake',
    bio: 'I work at statefarm',
    image: 'https://i.stack.imgur.com/xHWG8.jpg',
    following: true
}
