import image2 from '@/images/resources/work-pkg2-img3.png';
import image3 from '@/images/resources/work-pkg2-img2.png';
import image from '@/images/resources/work-pkg2-img1.png';
import thelmaPalaoag from '@/images/team/thelma-palaoag.jpg';

const text1 =
  'Research and development for UC will be leveled up beginning from an identification of needs, and the upgrading of faculty members’ and stu-dents’ skill in research formulation, implementation, and analysis especially in the field of Criminology and Criminal Justice. The target is mainstreaming research and research capabilities to an international standard that can be worthy of dissemination in reputable journals. Moreover, the project will see how research can really inform education and outreach.';
const text2 =
  'Whatever enhancements can be done to improve the content of the curriculum, of course offerings, and of pedagogies can best come from a good research. For a more relevant outreach, research can provide the needed data on approaches and content that will and should be delivered.';
const summaryText =
  'The project hopes to see UC no longer doing research that stays unread and not disseminated. On the other hand, it hopes to see UC conducting researches that are actually addressing needs and problems, as well as the pushing frontiers in Criminology and related fields.';

const workPackage2Details = {
  raised: '25,270',
  goal: '30,000',
  category: 'Medical',
  title:
    'Strengthened Research and Development attuned to the needs of the times',

  images: [image, image2, image3],
  texts: [text1, text2],
  summaryText,
  summaryList: [
    'Upgrading research capabilities.',
    'Informing education and outreach.',
    'Enhancing curriculum through research.',
    'Addressing needs, pushing frontiers.',
    'Disseminating impactful research.',
  ],
  comments: [
    {
      id: 1,
      image: 'comment-1-1.jpg',
      message:
        'Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.',
      sender: 'David Marks',
      time: '3 hours ago',
    },
    {
      id: 2,
      image: 'comment-1-2.jpg',
      message:
        'Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.',
      sender: 'Christine Eve',
      time: '3 hours ago',
    },
  ],
  sidebar: {
    activities: [
      {
        id: 1,
        image: 'recent-donation-img-1.jpg',
        amount: 'July 2022',
        name: "Rights2Life's Website Development Journey",
        // time: "3 hours ago",
        text: 'The Rights2Life team has embarked on an exciting journey of website development to empower individuals and...',
      },
    ],
    lead: {
      image: thelmaPalaoag,
      name: 'Dr. Thelma D. Palaoag',
      education: 'CITCS',
      location: 'University of the Cordilleras',
    },
  },
};

export default workPackage2Details;
