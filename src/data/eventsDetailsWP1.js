import image from '@/images/resources/event-details-img-1.jpg';

const text1 =
  'Prof. Dr. Tine Destrooper from the Faculty of Law, Department of Criminology, Criminal Law and Social Law spoke before 300 plus students on what transitional justice means and the importance of awareness and action that must be done on pending cases like that which exists in the Philippines.';
// const text2 =
//   'Hon. Jose M. Molintas, a Baguio City Counselor and Atty. Joel Dizon, a faculty member of the Faculty of Law of the University of the Cordilleras (UC), led the forum on March 9, 2023 at the UC Auditorium. They emphasized to more than 200 students that the circumstances of the past should empower change Filipinos to unify and be involved, in order to achieve true freedom and democracy for all.';
// const text3 =
//   'P/COL. Marites B. Villacarlos, Chief Of The Regional Forensic Unit-Cordillera shared the value and various roles of women in nation building, emphasizing the vast opportunity that the world may offer women despite their gender. She emphasized that women in Philippine society may not be physically equal to men but they are capable of doing more to solve things and achieve more. She ends with the line, “hindi ka babae lang (You are not a mere woman),you are more than enough.”';
// const text4 =
//   'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ley of type and scrambled it to make a type specimen book.';

const eventsDetailsWP1 = [
  {
    id: 1,
    image,
    date: '10/24/22',
    title: 'A Lecture-Forum On Transitional Justice',
    texts: [text1],
    // url: '',
    // id: 1,
    // image: dummy,
    // date: '10/24/22',
    // title: 'A Lecture-Forum On Transitional Justice',
    // texts: [text1],
    // texts: [text1, text2],
    // requirements: [text3, text4],
    // startingTime: '8:00AM to 2:00PM',
    // date: '9 Jan, 2021',
    // category: 'Health',
    // phone: '92 666 888 0000',
    // website: 'Info@event.com',
    // location: '8 Street, San Marcos \n London D29, UK',
  },
  {
    id: 2,
    image,
    date: '05/09/2023',
    title: 'Remembering EDSA: Implications of the EDSA Revolution to Political and Civil Rights',
    texts: [text3],
  },
  {
    id: 3,
    image,
    date: '05/16/2023',
    title: 'WE for gender equality and inclusive society": Womens’ Month Forum',
    texts: [text2],
  },
];

export default eventsDetailsWP1;
