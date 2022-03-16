let renderEntireTree = () => {
    console.log('What\'s up');
}

let state = {
    messagesPage: {
        users: [
            { id: 1, name: 'Вася' },
            { id: 2, name: 'Ваня' },
            { id: 3, name: 'Варя' },
            { id: 4, name: 'Валя' },
            { id: 5, name: 'Рома' },
            { id: 6, name: 'Женя' }
        ],

        text: [
            { id: 1, text: 'hello!!! how re you dowing?' },
            { id: 2, text: 'Ad labore ea aliqua voluptate exercitation pariatur quis ullamco elit sunt culpa quis.' },
            { id: 3, text: 'Velit irure ea laborum voluptate nisi officia nulla excepteur in occaecat cupidatat.' },
            { id: 4, text: 'Sit sint Lorem occaecat laborum reprehenderit Lorem eiusmod laboris dolor non Lorem deserunt nulla.' },
            { id: 5, text: 'Commodo ullamco aute aute esse. Consectetur cupidatat tempor ea ullamco Lorem eu ullamco velit sint ullamco ipsum. Quis magna sunt qui eu dolore sint velit sint officia dolor ex Lorem. Culpa ex enim velit duis. Incididunt esse qui dolor do aute dolor incididunt commodo cillum.' },
            { id: 6, text: 'Occaecat sit nulla esse laborum aute anim labore.' }
        ]
    },

    profilePage: {
        posts: [
            { id: 1, text: 'Ex aliquip mollit aute ex commodo.', likes: 16 },
            { id: 2, text: 'Irure consectetur ex culpa sit dolor anim culpa do elit dolore sunt culpa.', likes: 96 },
            { id: 3, text: 'Eu irure est amet commodo enim adipisicing excepteur non non esse aliquip.', likes: 18 },
            { id: 4, text: 'Non dolore esse aliquip nostrud est eiusmod est id nulla ut id voluptate. Ipsum aute qui proident dolor labore nisi. Enim laborum laborum qui irure consectetur laboris cupidatat reprehenderit laboris nulla velit minim.', likes: 62 },
            { id: 5, text: 'Exodus neus ex', likes: 21 },
        ],

        onChangeValue: ''
    }
}


export function addPost() {

    let newPost = {
        id: 6,
        text: state.profilePage.onChangeValue,
        likes: 0
    };
    //debugger;
    state.profilePage.posts.push(newPost);
    state.profilePage.onChangeValue = '';
    renderEntireTree(state);
};

export function onChangeText(text) {
    state.profilePage.onChangeValue = text;
    renderEntireTree(state);
}


export function subscribe (observer) {
    renderEntireTree = observer;
}


export default state;