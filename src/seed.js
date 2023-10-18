import { collection, addDoc } from "firebase/firestore";
/* 
eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    // const users = [
    //   {
    //     userId: 'nEy3vZ5imgYrLV9WajBRkgo5MrX2',
    //     fullName: 'KOIKOI, P (32446438)',
    //     emailAddress: '32446438@mynwu.ac.za',
    //     studentNo: '32446438',
    //     isRegistered : false,
    //     balanceOwing: 0.1,
    //     isSelfPaying:false,
    //     completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
    //     'ECON112','ECON122' ,'INFS113','INFS122','STFM111','STFM125' ],
    //     registeredModules: [],
        
    //   },
    //   {
    //     userId: 'jmKzmgUYlSSDF1tF9jtvcDsLrN32',
    //     fullName: 'NTULI, D.L (39043169)',
    //     emailAddress: '39043169@mynwu.ac.za',
    //     studentNo: '39043169',
    //     isRegistered : false,
    //     balanceOwing: 25000.50,
    //     isSelfPaying:true,
    //     completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
    //     'ECON112','ECON122' ,'STFM111','STFM125' ],
    //     registeredModules: [],
    //   },
    //   {
    //     userId: 'DR5MPEj0ajYoVc8V8Dv0fYytdKn2',
    //     fullName: 'Mathema, S.S (32446438)',
    //     emailAddress: '37499335@mynwu.ac.za',
    //     studentNo: '32446438',
    //     isRegistered : false,
    //     balanceOwing: 0.1,
    //     isSelfPaying:true,
    //     completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
    //     'ECON112','ECON122' ,'INFS113','INFS122','STFM111','STFM125' ],
    //     registeredModules: [],
    //   }
    // ];
  
    // // eslint-disable-next-line prefer-const
    // for (let k = 0; k < users.length; k++) {
      
    //   addDoc(collection(firebase, "students"), users[k]);
    // }

    const modules = [
        {
          moduleId: 'INFS113',
          name: 'Introduction to Computers and Programming',
          credits: 12,
          prerequisites: []
          
        },
        {
            moduleId: 'INFS122',
            name: 'Introduction to Programming',
            credits: 12,
            prerequisites: []
        },
        {
            moduleId: 'INFS211',
            name: 'Object Oriented Programming',
            credits: 12,
            prerequisites: ['INFS122']
        },
        {
            moduleId: 'INFS212',
            name: 'Computer Organization and Architecture',
            credits: 12,
            prerequisites: ['INFS122', 'INFS113']
        },
        {
            moduleId: 'INFS213',
            name: 'System Analysis',
            credits: 12,
            prerequisites: ['INFS113']
        },
        {
            moduleId: 'INFS214',
            name: 'Introduction to Networks ',
            credits: 12,
            prerequisites: ['INFS113']
        },
        {
            moduleId: 'INFS221',
            name: 'Electronic Business',
            credits: 12,
            prerequisites: ['INFS113']
        },
        {
            moduleId: 'INFS222',
            name: 'Introduction to Databases ',
            credits: 12,
            prerequisites: ['INFS113']
        },
        {
            moduleId: 'INFS223',
            name: 'System Design',
            credits: 12,
            prerequisites: ['INFS113']
        },
        {
            moduleId: 'INFS224',
            name: 'Web Programming and System Application',
            credits: 12,
            prerequisites: ['INFS122']
        },
        {
            moduleId: 'INFS311',
            name: 'Database Systems ',
            credits: 16,
            prerequisites: ['INFS222','INFS223']
        },
        {
            moduleId: 'INFS312',
            name: 'Project Management for Information Systems ',
            credits: 16,
            prerequisites: ['INFS213','INFS223']
        },
        {
            moduleId: 'INFS313',
            name: 'Information Systems Security',
            credits: 16,
            prerequisites: ['INFS214','INFS224']
        },
        {
            moduleId: 'INFS321',
            name: 'Emerging Business Technologies',
            credits: 16,
            prerequisites: ['INFS222','INFS213','INFS223']
        },
        {
            moduleId: 'INFS322',
            name: 'Management Information Systems',
            credits: 16,
            prerequisites: ['INFS113','INFS213','INFS223']
        },
        {
            moduleId: 'INFS323',
            name: 'Information Systems Project',
            credits: 16,
            prerequisites: ['INFS221','INFS222','INFS223']
        },
        {
            moduleId: 'INFS324',
            name: 'Business Intelligence',
            credits: 16,
            prerequisites: ['INFS222','INFS223']
        },
        {
            moduleId: 'WVES222',
            name: 'Understanding the World of Economic and Management Science',
            credits: 12,
            prerequisites: []
        },
        {
            moduleId: 'WVES312',
            name: 'Understanding the World of Business Ethics',
            credits: 12,
            prerequisites: []
        }
    

      ];
    
      // eslint-disable-next-line prefer-const
      for (let k = 0; k < modules.length; k++) {
        
        addDoc(collection(firebase, "modules"), modules[k]);
      }
  
    
  }