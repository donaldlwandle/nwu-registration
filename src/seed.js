import { collection, addDoc } from "firebase/firestore";
/* 
eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'nEy3vZ5imgYrLV9WajBRkgo5MrX2',
        fullName: 'KOIKOI, P (32446438)',
        emailAddress: '32446438@mynwu.ac.za',
        studentNo: '32446438',
        isRegistered : "register",
        residence:'off-campus',
        completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
        'ECON112','ECON122' ,'INFS113','INFS122','STFM111','STFM125' ],
        registeredModules: [],
        international: false
        
      },
      {
        userId: 'jmKzmgUYlSSDF1tF9jtvcDsLrN32',
        fullName: 'NTULI, D.L (39043169)',
        emailAddress: '39043169@mynwu.ac.za',
        studentNo: '39043169',
        isRegistered : "register",
        residence:'campus',
        completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
        'ECON112','ECON122' ,'STFM111','STFM125' ],
        registeredModules: [],
        international: false
      },
      {
        userId: 'DR5MPEj0ajYoVc8V8Dv0fYytdKn2',
        fullName: 'Mathema, S.S (37499335)',
        emailAddress: '37499335@mynwu.ac.za',
        studentNo: '37499335',
        isRegistered : "register",
        residence:'distance',
        completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
        'ECON112','ECON122' ,'INFS113','INFS122','STFM111','STFM125' ],
        registeredModules: [],
        international: true
      },
      {
        userId: 'qcVZq1whDuWRiR3y1jPmiSaDQrP2',
        fullName: 'Student, T.S (12345678)',
        emailAddress: '12345678@mynwu.ac.za',
        studentNo: '12345678',
        isRegistered : "register",
        residence:'distance',
        completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
        'ECON112','ECON122' ,'INFS113','INFS122','STFM111','STFM125' ],
        registeredModules: [],
        international: true
      },
      {
        userId: 'fkIfWjvRFieL2LdEfcdRtFczTjw2',
        fullName: 'Student2, T.V (87654321)',
        emailAddress: '87654321@mynwu.ac.za',
        studentNo: '87654321',
        isRegistered : "register",
        residence:'distance',
        completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
        'ECON112','ECON122' ,'INFS113','INFS122','STFM111','STFM125' ],
        registeredModules: [],
        international: true
      },
      {
        userId: 'TSoXVcfAnPZ6FCZbrLjuAumeSsw2',
        fullName: 'Student 3, G.H (24681012)',
        emailAddress: '24681012@mynwu.ac.za',
        studentNo: '24681012',
        isRegistered : "register",
        residence:'campus',
        completedModules: ['ACCS111' ,'ACCS121', 'ALDE122','BMAN111','BMAN121' ,
        'ECON112','ECON122' ,'STFM111','STFM125' ],
        registeredModules: [],
        international: true
      }


    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      
      addDoc(collection(firebase, "students"), users[k]);
    }



    const accounts = [
        {
          userId: 'nEy3vZ5imgYrLV9WajBRkgo5MrX2',
          sponsor: 'NSFAS',
          balanceOwing:0.1
          
        },
        {
          userId: 'jmKzmgUYlSSDF1tF9jtvcDsLrN32',
          sponsor: 'SELF',
          balanceOwing:1000
        },
        {
          userId: 'DR5MPEj0ajYoVc8V8Dv0fYytdKn2',
          sponsor: 'BURSARY',
          balanceOwing:0.1
        },
        {
          userId: 'qcVZq1whDuWRiR3y1jPmiSaDQrP2',
          sponsor: 'NSFAS',
          balanceOwing:700
        },
        {
            userId: 'fkIfWjvRFieL2LdEfcdRtFczTjw2',
            sponsor: 'SELF',
            balanceOwing:300
        },

        {
            userId: 'TSoXVcfAnPZ6FCZbrLjuAumeSsw2',
            sponsor: 'SELF',
            balanceOwing:260
        }
  
  
      ];
    
      // eslint-disable-next-line prefer-const
      for (let k = 0; k < accounts.length; k++) {
        
        addDoc(collection(firebase, "accounts"), accounts[k]);
      }






    // const modules = [
    //     {
    //       moduleId: 'INFS113',
    //       name: 'Introduction to Computers and Programming',
    //       credits: 12,
    //       prerequisites: [],
    //       cost:5065.00
          
    //     },
    //     {
    //         moduleId: 'INFS122',
    //         name: 'Introduction to Programming',
    //         credits: 12,
    //         prerequisites: [],
    //         cost:5065.00
    //     },
    //     {
    //         moduleId: 'INFS211',
    //         name: 'Object Oriented Programming',
    //         credits: 12,
    //         prerequisites: ['INFS122'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS212',
    //         name: 'Computer Organization and Architecture',
    //         credits: 12,
    //         prerequisites: ['INFS122', 'INFS113'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS213',
    //         name: 'System Analysis',
    //         credits: 12,
    //         prerequisites: ['INFS113'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS214',
    //         name: 'Introduction to Networks ',
    //         credits: 12,
    //         prerequisites: ['INFS113'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS221',
    //         name: 'Electronic Business',
    //         credits: 12,
    //         prerequisites: ['INFS113'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS222',
    //         name: 'Introduction to Databases ',
    //         credits: 12,
    //         prerequisites: ['INFS113'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS223',
    //         name: 'System Design',
    //         credits: 12,
    //         prerequisites: ['INFS113'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'INFS224',
    //         name: 'Web Programming and System Application',
    //         credits: 12,
    //         prerequisites: ['INFS122'],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'WVES222',
    //         name: 'Understanding the World of Economic and Management Science',
    //         credits: 12,
    //         prerequisites: [],
    //         cost:3650.00
    //     },
    //     {
    //         moduleId: 'WVES312',
    //         name: 'Understanding the World of Business Ethics',
    //         credits: 12,
    //         prerequisites: [],
    //         cost:3345.00
    //     }
    

    //   ];
    
    //   // eslint-disable-next-line prefer-const
    //   for (let k = 0; k < modules.length; k++) {
        
    //     addDoc(collection(firebase, "modules"), modules[k]);
    //   }
  
    
  }