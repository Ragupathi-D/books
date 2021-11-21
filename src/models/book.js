export const bookModel =  {
  image : "@/assets/logo.png",
  title : '',
  description : '',
  authorName : '',
  bookId : null,
  delete : false,
  editions : []
}

export const bookEditionModel = {
  edition : '',
  price : '',
  description : '',
  stock : '',
  delete : false
}

export const sampleData = [
  {
    image : "@/assets/logo.png",
    title : 'Book 1',
    description : 'descript8ion asdfasdf asdfasdf asdfasdfasd fasdfasdf asdfsadf sadfsadf sadfasdf sadfasdfasd fasd fas df sad f asdf asdfasdfsa dfas df asd fasdf asd fa sdf',
    authorName : 'Mani',
    stock : 5,
    price : 100,
    bookId : 1,
    delete : false
  },
  {
    image : "@/assets/logo.png",
    title : 'Book 2',
    description : 'descript8ion',
    authorName : 'Mani',
    stock : 5,
    price : 100,
    bookId : 2,
    delete : false
  }
]

export const sampleOrder = [
  {
    userId : 1,
    title : 'Book 1',
    price : 150,
    qty : 5, 
  },
  {
    userId : 1,
    title : 'Book 2',
    price : 300,
    qty : 6,
    
  }
]