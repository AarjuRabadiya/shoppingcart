import apple from '../images/apple.jpg';
import chain from '../images/chain.jpg';
import chimpanzee from '../images/chimpanzee.jpg';
import cognac from '../images/cognac.jpg';
import dog from '../images/dog.jpg';
import kittens from '../images/kittens.jpg';
import mango from '../images/mango.png';
import orange from '../images/orange.jpg';
import peach from '../images/peach.jpg';
import shark from '../images/shark.jpg';

const INIT_PRODUCTS = [
    {
        id: "1",
        image:chimpanzee,
        name: "Chimpanzee",
        description:"This is chimpanzee",
        details: "This is where some detailes on monkies would go. This monkey done seent some shit.",
        price:10.10
      },
      {
        id: "2",
        image:kittens,
        name: "Kittens",
        description:"This is kittens",
        details: "This is where some detailes on kittens would go. Shout out kittens for being adorable.",
        price:17.38
      },
      {
        id: "3",
        image:shark,
        name: "Shark",
        description:"This is shark",
        details: "This is where some detailes on sharks would go. Damn nature, you scary.",
        price:12.10
      },
      {
        id: "4",
        image:dog,
        name: "Dog",
        description:"This is dog",
        details: "This is where some detailes on puppies would go. Shout out puppies for being adorable.",
        price:17.38 
      },
      {
        id: "5",
        image:apple,
        name: "Apple",
        description:"This is apple",
        details: "This is where some detailes on apples would go. Shout out apples for being delicious.",
        price:2.10
      },
      {
        id: "6",
        image:orange,
        name: "Orange",
        description:"This is orange",
        details: "This is where some detailes on oranges would go. Shout out oranges for being delicious.",
        price:12.10
      },
      {
        id: "7",
        image:peach,
        name: "Peach",
        description:"This is peach",
        details: "This is where some detailes on peaches would go. Shout out peaches for being delicious.",
        price:17.38
      },
      {
        id: "8",
        image:mango,
        name: "Mango",
        description:"This is mango",
        details: "This is where some detailes on mangos would go. Shout out mangos for being delicious.",
        price:12.10
      },
      {
        id: "9",
        image:cognac,
        name: "Cognac",
        description:"This is cognac",
        details: "This is where some detailes on cognac would go. I'm like hey whats up, hello.",
        price:17.38 
      },
      {
        id: "10",
        image:chain,
        name: "Chain",
        description:"This is chain",
        details: "This is where some details on chains would go. 2Chainz but I got me a few on.",
        price:20.10
      }
];
export default function productsReducer(state=INIT_PRODUCTS, action={}) {
    
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];
        default:
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}