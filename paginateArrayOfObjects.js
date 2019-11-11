
function Paginator(items, page, per_page) {
 
  var page = page || 1,
  per_page = per_page || 10,
  offset = (page - 1) * per_page,
 
  paginatedItems = items.slice(offset).slice(0, per_page),
  total_pages = Math.ceil(items.length / per_page);
  return {
  page: page,
  per_page: per_page,
  pre_page: page - 1 ? page - 1 : null,
  next_page: (total_pages > page) ? page + 1 : null,
  total: items.length,
  total_pages: total_pages,
  data: paginatedItems
  };
}

Example:
let items = [
  {
  "id": 1,
  "first_name": "Arjun",
  "last_name": "A",
  },
  {
  "id": 2,
  "first_name": "Kalyan",
  "last_name": "J",
  },
  {
  "id": 3,
  "first_name": "Raj",
  "last_name": "Kiran",
  },
  {
  "id": 4,
  "first_name": "Naveen",
  "last_name": "A",
  },
  {
  "id": 5,
  "first_name": "Pravinh",
  "last_name": "A",
  },
  {
  "id": 6,
  "first_name": "Srinivas",
  "last_name": "S",
  },
  {
  "id": 7,
  "first_name": "Mahipal",
  "last_name": "K",
  },
  {
  "id": 8,
  "first_name": "Sathish",
  "last_name": "Y",
  },
  {
  "id": 9,
  "first_name": "Aravind",
  "last_name": "A",
  },
  {
  "id": 10,
  "first_name": "Phani",
  "last_name": "C",
  },
  {
  "id": 11,
  "first_name": "Krishna",
  "last_name": "A",
  },
  {
  "id": 12,
  "first_name": "Pradeep",
  "last_name": "S",
  }
];
console.log(Paginator(items));
// output will be as shown below
/*{ page: 1,
  per_page: 10,
  pre_page: null,
  next_page: 2,
  total: 12,
  total_pages: 2,
  data:
  [ { id: 1, first_name: 'Arjun', last_name: 'A' },
  { id: 2, first_name: 'Kalyan', last_name: 'J' },
  { id: 3, first_name: 'Raj', last_name: 'Kiran' },
  { id: 4, first_name: 'Naveen', last_name: 'A' },
  { id: 5, first_name: 'Pravinh', last_name: 'A' },
  { id: 6, first_name: 'Srinivas', last_name: 'S' },
  { id: 7, first_name: 'Mahipal', last_name: 'K' },
  { id: 8, first_name: 'Sathish', last_name: 'Y' },
  { id: 9, first_name: 'Aravind', last_name: 'A' },
  { id: 10, first_name: 'Phani', last_name: 'C' } ] }
*/
console.log(Paginator(items,2));
// output will be as shown below
/*
{ page: 2,
  per_page: 10,
  pre_page: 1,
  next_page: null,
  total: 12,
  total_pages: 2,
  data:
  [ { id: 11, first_name: 'Krishna', last_name: 'A' },
  { id: 12, first_name: 'Pradeep', last_name: 'S' } ] }
*/
 
console.log(Paginator(items,2,5));
// output will be as shown below
/*
{ page: 2,
  per_page: 5,
  pre_page: 1,
  next_page: 3,
  total: 12,
  total_pages: 3,
  data:
  [ { id: 6, first_name: 'Srinivas', last_name: 'S' },
  { id: 7, first_name: 'Mahipal', last_name: 'K' },
  { id: 8, first_name: 'Sathish', last_name: 'Y' },
  { id: 9, first_name: 'Aravind', last_name: 'A' },
  { id: 10, first_name: 'Phani', last_name: 'C' } ] }
*/
